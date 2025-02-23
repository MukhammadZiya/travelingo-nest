import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	REVIEW = 'REVIEW',
	DESTINATION = 'DESTINATION',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
