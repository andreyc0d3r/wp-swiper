# WP Swiper Roadmap

Last reviewed: 31 July 2026

## Product direction

WP Swiper should remain a focused Gutenberg carousel that accepts nested WordPress
blocks and uses vanilla Swiper on the frontend.

The current React `save()` implementations remain the source of saved frontend
markup. Moving block rendering to PHP is not part of this roadmap.

The roadmap is maintained in this repository so that product intent, technical
constraints, dependencies, and acceptance criteria stay versioned with the code.
Approved implementation items can be mirrored into Digital Apps HQ for ownership
and delivery tracking.

## Priorities

| Order | Initiative | Status | Intended outcome |
| --- | --- | --- | --- |
| 1 | Stabilization release | Ready for release | Resolve regressions and accessibility defects before expanding the feature set |
| 2 | Engineering foundation | In progress | Create reliable configuration, editor, frontend lifecycle, and test boundaries |
| 3 | Responsive setup and presets | Planned after WordPress 7.1 API review | Replace raw breakpoint configuration with a native-feeling responsive workflow |
| 4 | Dynamic content | Later | Support post, product, and Query Loop carousel use cases |
| 5 | Abilities API | Explore later | Expose safe, deterministic carousel operations to AI and automation |

## 1. Stabilization release

### Scope

- [x] Finish and validate fractional `slidesPerView` support.
- [x] Finish and validate migration of markup saved by version 1.3.10.
- [x] Restore the multi-image Media Library selection workflow promised in the
      public changelog.
- [x] Fix mousewheel initialization so it does not depend on
      `releaseOnEdges`, and preserve the boolean value correctly.
- [x] Keep the active slide valid when slides are removed or reordered.
- [x] Isolate frontend initialization failures to the affected slider.
- [x] Validate and safely parse legacy breakpoint values.
- [x] Add an accessible name for each carousel.
- [x] Correct custom navigation icon alternative text and ensure decorative
      images are hidden appropriately.
- [x] Provide a visible pause/resume control when autoplay is enabled.
- [x] Respect reduced-motion preferences for autoplay and transitions.

Version 1.4.9 is ready for release. Editor and frontend browser flows run the
packaged plugin contents against the minimum and latest supported WordPress
versions in CI. The generated archive passes activation, deactivation and
uninstall checks. Official Plugin Check reports no code or package findings; its
only remaining warnings concern the existing approved plugin name and slug.

### Acceptance criteria

- Existing block fixtures open without an invalid-block warning.
- Saving and reopening migrated blocks preserves their content and settings.
- One invalid slider configuration does not prevent other sliders from starting.
- Navigation, pagination, autoplay, mousewheel, loop, thumbnails, vertical mode,
  and fractional slide counts have regression coverage.
- The carousel boundary and controls are understandable with keyboard and screen
  reader navigation.
- Unit tests, JavaScript checks, style checks, PHP syntax checks, build, package,
  and release verification pass in the supported environment.
- The release is tested against the minimum supported WordPress version and the
  latest stable WordPress version.

## 2. Engineering foundation

This initiative is not a rewrite. It creates small, testable boundaries around
the behavior that is currently repeated across the editor, saved markup, and
frontend runtime.

### 2.1 Canonical block metadata

- [x] Move every registered attribute and default into each block's `block.json`.
- [x] Remove the additional attribute definitions currently appended in
      `src/blocks/slides/index.js`.
- [x] Document which attributes are persisted content, editor-only state, derived
      state, or Swiper runtime configuration.
- [x] Preserve serialized attribute names and backward compatibility.

Why: PHP and JavaScript currently do not receive the same schema. A complete
metadata contract also prepares the block for future WordPress APIs and tooling.

### 2.2 Shared Swiper configuration pipeline

- [x] Add a pure `normalizeSliderAttributes()` function.
- [x] Add a pure `buildSwiperConfig()` function used by the editor preview and
      `save()`.
- [x] Add a defensive `parseSwiperConfig()` function for the frontend.
- [x] Define compatibility rules for fade, loop, grouping, auto-width, free mode,
      mousewheel, thumbnails, and breakpoints.
- [x] Return structured validation messages instead of allowing invalid
      combinations to reach Swiper.
- [x] Add fixture-driven parity tests for editor, saved `data-swiper`, and
      frontend parsing.

Why: configuration is currently assembled independently in multiple places. That
allows settings such as mousewheel to behave differently between the editor,
saved markup, and frontend.

### 2.3 Editor decomposition

- [ ] Separate the large slider editor into focused control panels and hooks.
- [ ] Extract slide collection, active-slide, media-selection, preview, and
      configuration responsibilities.
- [ ] Make child block attributes the canonical source where practical, rather
      than duplicating slide data in the parent.
- [x] Replace clickable `div` tab controls with accessible WordPress components
      or complete keyboard-enabled tab semantics.
- [ ] Keep each extraction behavior-preserving and covered by tests.

Suggested boundaries:

- `useSlideCollection`
- `useActiveSlide`
- `useSwiperPreview`
- `GeneralSettings`
- `ResponsiveSettings`
- `AutoplaySettings`
- `NavigationSettings`
- `AdvancedSettings`

### 2.4 Frontend lifecycle

- [x] Introduce an idempotent `initSwiper(element)` function.
- [x] Track the Swiper instance on its own container.
- [x] Catch and report configuration errors per slider.
- [x] Support initialization of sliders inserted after `DOMContentLoaded`.
- [x] Provide a destroy/reinitialize path for navigation, AJAX, and editor-like
      environments.
- [x] Avoid resetting plugin globals when the script is evaluated more than once.

### 2.5 Media data and output

- [ ] Persist attachment IDs consistently for slide, thumbnail, overlay, and
      navigation images.
- [ ] Preserve image size and relevant media metadata instead of relying only on
      full-size URLs.
- [ ] Define responsive image behavior for content images and document the
      limitations of CSS background images.
- [x] Prevent partial multi-upload failures from leaving the editor in an
      inconsistent state.

### 2.6 Test and quality gates

- [x] Add serializer tests for the current and every supported deprecated save.
- [x] Add configuration matrix tests.
- [x] Add frontend lifecycle and multiple-slider tests.
- [x] Add editor tests for adding, deleting, reordering, and selecting slides.
- [x] Add browser-level smoke tests in a WordPress environment.
- [ ] Add JavaScript and style linting to CI after separating baseline formatting
      cleanup from behavioral changes.
- [ ] Keep PHP 7.4 compatibility until the documented minimum changes.

### 2.7 Frontend performance

- [ ] Replace the full Swiper bundle with a build containing only supported
      modules.
- [ ] Verify that both Swiper and the initializer use an appropriate loading
      strategy.
- [ ] Measure transferred size, execution time, and layout shift before and after
      changes.
- [ ] Retain conditional asset loading on pages that contain WP Swiper blocks.

## 3. Responsive setup and presets

### WordPress dependency

WordPress 7.0 introduced viewport-based block visibility. WordPress 7.1 is
developing responsive style states and theme-configurable breakpoints.

Core responsive styling applies automatically to standard block supports such as
color, typography, spacing, borders, layout, and dimensions. It does not
automatically apply to custom controls such as `slidesPerView`,
`slidesPerGroup`, `spaceBetween`, offsets, or Swiper module settings.

References:

- [WordPress 7.0 block visibility](https://make.wordpress.org/core/2026/03/15/block-visibility-in-wordpress-7-0/)
- [WordPress 7.1 responsive styling test](https://make.wordpress.org/test/2026/07/03/call-for-testing-responsive-styling/)
- [WordPress responsive `theme.json` styles](https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/#responsive-styles)

### Integration approach

- [ ] Review the final WordPress 7.1 responsive APIs and data format after release.
- [ ] Reuse the WordPress viewport selection and preview state when available.
- [ ] Read theme-defined mobile and tablet breakpoints where the public API permits.
- [ ] Keep Swiper runtime settings in WP Swiper's validated attribute contract.
- [ ] Translate WordPress's named viewport model into Swiper's breakpoint model
      without assuming that their media-query directions or units are identical.
- [ ] Provide a compatible inspector experience on older supported WordPress
      versions.
- [ ] Retain the raw JSON field as a permanent advanced editing mode.

### Visual breakpoint builder and raw JSON contract

The visual builder and JSON textarea are two editors for the same breakpoint
configuration. Neither is a separate source of truth.

- [ ] Add Visual and JSON modes within the Responsive settings panel.
- [ ] Parse valid existing JSON into visual breakpoint rows.
- [ ] Update the JSON immediately when a supported visual value changes.
- [ ] Update the visual controls when valid JSON is edited.
- [ ] Preserve valid Swiper properties that the visual builder does not understand
      or expose.
- [ ] Never replace or normalize user JSON while it is invalid.
- [ ] Show the exact parsing error and disable only the visual mode until the JSON
      is valid again.
- [ ] Produce stable, readable JSON with numerically ordered breakpoint keys.
- [ ] Warn before removing a breakpoint or property that contains advanced values
      not represented by the visual controls.
- [ ] Add round-trip tests proving that switching modes does not lose configuration.

The internal model should remain based on Swiper's behavior: base settings apply
below the first minimum-width breakpoint, and each numeric breakpoint applies at
that width and above. WordPress viewport names are a user-interface and preview
layer, not the stored Swiper data model.

### User-facing controls

- [ ] Provide a base configuration, suggested Mobile, Tablet, and Desktop ranges,
      and the ability to add a custom minimum-width breakpoint.
- [ ] Provide responsive values for:
  - slides per view;
  - slides per group;
  - space between slides;
  - offsets;
  - centered slides;
  - optional auto-width behavior.
- [ ] Show which values are inherited and which are overridden.
- [ ] Display the effective pixel range represented by each named viewport.
- [ ] Offer theme breakpoint values as suggested or imported values without
      silently rewriting existing custom breakpoints.
- [ ] Preview the selected viewport without requiring users to understand Swiper
      JSON.
- [ ] Prevent or explain incompatible configurations.

### Presets

- [ ] Add block variations or patterns for:
  - Hero;
  - Cards;
  - Image gallery;
  - Logo strip;
  - Testimonials;
  - Main gallery with thumbnails.
- [ ] Build presets entirely from the existing WP Swiper and core block model.
- [ ] Allow users to change or remove every preset choice after insertion.
- [ ] Do not add frontend dependencies for presets.

## 4. Dynamic content

- [ ] Research a Query Loop-compatible carousel experience.
- [ ] Define post and WooCommerce product carousel requirements separately.
- [ ] Prefer composition with core blocks and block bindings over duplicating
      query or product presentation systems.
- [ ] Prototype before committing to backward-compatible public attributes.

## 5. Abilities API

Do not expose broad AI operations until the shared configuration pipeline is
stable.

Potential future abilities:

- Create a carousel from selected attachment IDs.
- Apply a named preset.
- Read or update responsive slider settings.
- Add, remove, or reorder slides.
- Audit a carousel for invalid settings and accessibility issues.

Every write ability must validate permissions, attribute values, media ownership,
and supported block structure before changing content.

## Digital Apps HQ workflow

`ROADMAP.md` is the product and technical source of truth. Digital Apps HQ should
track delivery using columns such as:

1. Inbox
2. Roadmap
3. Ready
4. In progress
5. Review
6. Released

Create one HQ card per independently releasable checkbox or tightly related group.
Each card should include:

- roadmap section and intended release;
- user problem and expected outcome;
- acceptance criteria;
- dependencies and compatibility requirements;
- relevant repository files and support reports;
- owner and current status.

When priorities or scope change, update this roadmap first and then update the HQ
cards.
