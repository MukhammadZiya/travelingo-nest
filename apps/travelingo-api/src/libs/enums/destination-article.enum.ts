import { registerEnumType } from '@nestjs/graphql';

export enum BoardArticleCategory {
	REVIEW = 'REVIEW',
	RECOMMEND = 'RECOMMEND',
}
registerEnumType(BoardArticleCategory, {
	name: 'BoardArticleCategory',
});

export enum BoardArticleStatus {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(BoardArticleStatus, {
	name: 'BoardArticleStatus',
});
