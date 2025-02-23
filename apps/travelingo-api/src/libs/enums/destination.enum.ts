import { registerEnumType } from '@nestjs/graphql';

export enum DestinationType {
	SPRING = 'SPRING',
	SUMMER = 'SUMMER',
	AUTUMN = 'AUTUMN',
	WINTER = 'WINTER',
}
registerEnumType(DestinationType, {
	name: 'DestinationType',
});

export enum DestinationStatus {
	HOLD = 'HOLD',
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(DestinationStatus, {
	name: 'DestinationStatus',
});

export enum DestinationLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHEONGJU = 'CHEONGJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(DestinationLocation, {
	name: 'DestinationLocation',
});
