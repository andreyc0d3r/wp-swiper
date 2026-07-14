/**
 * WordPress dependencies
 */
const { Component } = wp.element;

const { __ } = wp.i18n;

const { Button, Popover } = wp.components;

/**
 * Component Class
 */
export default class RemoveButton extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			confirmed: -1,
		};
	}

	render() {
		const { onRemove, show, style, tooltipText = __('Remove slide?', 'wp-swiper'), tooltipRemoveText = __('Remove', 'wp-swiper'), tooltipCancelText = __('Cancel', 'wp-swiper') } = this.props;

		const { confirmed } = this.state;

		if (!show) {
			return '';
		}

		return (
			<Button
				className="wb-component-remove-button"
				onClick={() => {
					if (confirmed === -1) {
						this.setState({
							confirmed: 0,
						});
					}
				}}
				style={style}
			>
				{confirmed === 0 ? (
					<Popover
						className="wb-component-remove-button-confirm"
						onClose={() => {
							this.setState({
								confirmed: -1,
							});
						}}
						onClickOutside={() => {
							this.setState({
								confirmed: -1,
							});
						}}
					>
						{tooltipText}
						<Button
							className="wb-component-remove-button-confirm-yep"
							onClick={onRemove}
						>
							{tooltipRemoveText}
						</Button>
						<Button
							className="wb-component-remove-button-confirm-nope"
							onClick={() => {
								this.setState({
									confirmed: -1,
								});
							}}
						>
							{tooltipCancelText}
						</Button>
					</Popover>
				) : (
					''
				)}
				{
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="trash"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="svg-inline--fa fa-trash fa-w-14 fa-3x"
					>
						<path
							fill="currentColor"
							d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
							class=""
						></path>
					</svg>
				}
			</Button>
		);
	}
}
