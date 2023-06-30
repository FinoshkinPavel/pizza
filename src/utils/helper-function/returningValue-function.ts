export const returningValue = <T>(
	windowScreenMore506px: T,
	ifTrue: T,
	ifFalse: T,
	booleanValue: boolean
) =>
	window.screen.width > 507
		? windowScreenMore506px
		: booleanValue && window.screen.width < 507
		? ifTrue
		: ifFalse;
