# Block attribute and runtime configuration contract

This document defines the ownership and compatibility expectations for WP
Swiper block attributes. The canonical schemas are:

- `src/blocks/slides/block.json` for the carousel block.
- `src/blocks/slide/block.json` for each child slide.

The schemas are consumed by both JavaScript and PHP. Attribute names and
defaults are therefore public persistence contracts, even when an attribute is
used only by the editor.

## Classification

Each attribute has one primary classification:

- **Persisted content or presentation** directly affects saved markup or styles.
- **Swiper runtime configuration** is translated into the saved `data-swiper`
  or `data-thumbs` configuration.
- **Editor-only state** preserves an authoring choice but must not affect the
  public carousel.
- **Derived compatibility state** mirrors another source so older saved blocks
  and current editor workflows can be migrated safely.

Some runtime attributes also affect saved presentation. Their primary
classification remains runtime configuration because they are validated by the
shared configuration pipeline.

## Carousel block attributes

| Classification | Attributes | Contract |
| --- | --- | --- |
| Persisted content or presentation | `align`, `overlayImg`, `previousIcon`, `nextIcon`, `overlayImgOpacity`, `sliderHeight`, `carouselLabel`, `overflowVisible`, `navigationColor`, `paginationColor` | Used by the current `save()` markup and styles. URLs remain supported for backward compatibility until attachment-backed media output has its own migration. |
| Shared slide presentation | `overlayColor`, `containerWidth` | Parent controls synchronize these values to child slides. Existing parent values remain readable while child attributes become the canonical per-slide source. |
| Editor-only state | `currentSlide`, `tabActive`, `buttonsAlign`, `selectedTemplate` | `tabActive` and `buttonsAlign` preserve editor selection and layout. `selectedTemplate` records that the in-block starting-template choice was completed so it stays dismissed after saving and reopening. `currentSlide` is retained as an unused legacy field so existing block comments remain valid. |
| Derived compatibility state | `tabsData` | Mirrors child slide order, image URLs, thumbnails, and slugs. It is still required by saved thumbnail markup. Changes must preserve migration from older arrays. |
| Core Swiper runtime | `autoHeight`, `direction`, `effect`, `speed`, `slidesPerView`, `slidesPerGroup`, `slidesPerGroupAuto`, `slidesPerGroupSkip`, `spaceBetween`, `autoSlideWidth`, `slidesOffsetBefore`, `slidesOffsetAfter`, `breakpoints` | Normalized by `normalizeSliderAttributes()`, serialized by `buildSwiperConfig()`, and parsed defensively before Swiper initialization. |
| Navigation runtime | `navigation`, `pagination`, `pagination_type`, `clickable_pagination`, `mousewheel`, `releaseOnEdges` | Boolean controls are persisted as block attributes. Module-specific options are nested only in the runtime configuration. |
| Autoplay runtime | `autoplay`, `showAutoplayControl`, `delay`, `disableOnInteraction`, `pauseOnMouseEnter`, `reverseDirection`, `stopOnLastSlide`, `waitForTransition` | Translated into the Swiper autoplay object only when autoplay is enabled. The pause/play control is omitted by default and rendered only when `showAutoplayControl` is enabled. The plugin removes this UI-only option before initializing Swiper. |
| Loop runtime | `loop`, `loopAddBlankSlides`, `loopAdditionalSlides` | Loop options are emitted only when loop is enabled. Numeric options are validated; minimum slide-count requirements remain enforced by Swiper until slide-aware validation is added. |
| Free-mode runtime | `freeMode`, `freeModeMinimumVelocity`, `freeModeMomentum`, `freeModeMomentumBounce`, `freeModeMomentumBounceRatio`, `freeModeMomentumRatio`, `freeModeMomentumVelocityRatio`, `freeModeSticky` | Nested under `freeMode` only when enabled. Incompatible single-slide effects disable free mode at runtime with a warning. |
| Thumbnail runtime | `thumbs`, `thumbsSlidesPerView`, `thumbsSpaceBetween` | Controls the separate `data-thumbs` configuration. Thumbnail configuration uses the same defensive parser as the main carousel. |
| Diagnostics | `debug` | Enables the documented `wp-swiper:debug` browser event. It must not change carousel behavior. |

## Slide block attributes

| Classification | Attributes | Contract |
| --- | --- | --- |
| Persisted content or presentation | `slideImg`, `thumbImg`, `contentVHalign`, `focalPoint`, `overlayColor`, `containerWidth` | Defines the slide background, thumbnail, content position, focal point, overlay, and content width. |
| Persisted media identity | `slideImgId` | Stores the WordPress attachment ID when available. Future responsive media work must retain the URL fallback for older slides. |
| Derived compatibility state | `slug` | Synchronized from child order and used by existing saved `data-tab` markup. It is not an author-facing identifier. |
| Legacy compatibility state | `align`, `contentValign`, `contentHalign` | Retained so older block comments continue to validate. New behavior uses block supports and `contentVHalign`. |

## Runtime compatibility rules

The frontend parser preserves unknown supported Swiper options while enforcing
the combinations WP Swiper exposes:

1. `fade`, `cube`, and `flip` use one slide per view and one slide per group.
   Free mode and the custom auto-width handler are disabled for those effects.
2. `slidesPerGroupAuto` is enabled only when `slidesPerView` is `auto` and
   `slidesPerGroup` is `1`.
3. `stopOnLastSlide` is disabled when loop mode is active because a loop has no
   final slide.
4. The legacy top-level `releaseOnEdges` value is migrated at runtime to
   `mousewheel.releaseOnEdges`.
5. Breakpoint keys are non-negative minimum widths and breakpoint values are
   objects. `direction`, `effect`, and `loop` are removed from breakpoint
   entries because Swiper cannot change them there.
6. Main and thumbnail configurations must be JSON objects. Invalid types and
   numeric ranges prevent only the affected carousel from initializing.

Compatibility corrections emit `wp-swiper:warning` with a structured
diagnostic containing `code`, `level`, `message`, and `path`. Invalid
configuration is attached to the existing `wp-swiper:error` event through the
error's `diagnostics` property.

## Backward compatibility requirements

- Do not rename or remove a registered attribute without a matching deprecated
  schema, historical `save()` implementation, and migration.
- Do not change a default when it would change saved markup without adding a
  deprecated save path.
- Normalize copies of attributes. Never mutate the block attributes supplied by
  Gutenberg.
- Keep current save output, the editor configuration view, and frontend parsing
  covered by the shared fixture matrix.
- Preserve unknown advanced Swiper properties unless they violate a documented
  compatibility rule.
- Rebuild committed assets after changing source that is shipped by the plugin.

The serializer and migration checks live in
`src/blocks/slides/deprecated.test.js`. Configuration and lifecycle checks live
under `src/utils/`.
