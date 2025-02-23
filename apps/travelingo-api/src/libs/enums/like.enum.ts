import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	MEMBER = 'MEMBER',
	DESTINATION = 'DESTINATION',
	ARTICLE = 'ARTICLE',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
