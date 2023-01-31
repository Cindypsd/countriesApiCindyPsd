import {
	getCountriesAlphabetically,
	getCountriesbyContinent,
} from '../../src/helpers/filters';

describe('Prueba de filtros y ordenamientos', () => {
	const countriesdata = [
		{
			id: 'PAN',
			name: 'Panama',
			continet: 'Americas',
		},
		{
			id: 'TGO',
			name: 'Togo',
			continet: 'Africa',
		},
		{
			id: 'MNG',
			name: 'Mongolia',
			continet: 'Asia',
		},
		{
			id: 'BEN',
			name: 'Benin',
			continet: 'Africa',
		},
	];

	test('should getCountriesAlphabetically debe ordenar A-Z', () => {
		const orderAZ = getCountriesAlphabetically(countriesdata, 'ASC');

		expect(orderAZ).toStrictEqual([
			{
				id: 'BEN',
				name: 'Benin',
				continet: 'Africa',
			},
			{
				id: 'MNG',
				name: 'Mongolia',
				continet: 'Asia',
			},
			{
				id: 'PAN',
				name: 'Panama',
				continet: 'Americas',
			},
			{
				id: 'TGO',
				name: 'Togo',
				continet: 'Africa',
			},
		]);
	});

	test('should getCountriesAlphabetically debe ordenar Z-A', () => {
		const orderZA = getCountriesAlphabetically(countriesdata, 'DES');

		expect(orderZA).toStrictEqual([
			{
				id: 'TGO',
				name: 'Togo',
				continet: 'Africa',
			},
			{
				id: 'PAN',
				name: 'Panama',
				continet: 'Americas',
			},
			{
				id: 'MNG',
				name: 'Mongolia',
				continet: 'Asia',
			},
			{
				id: 'BEN',
				name: 'Benin',
				continet: 'Africa',
			},
		]);
	});

	test('Deberia retornar los paises segun su continente ', () => {
		const africaCountries = getCountriesbyContinent(countriesdata, 'Africa');

		expect(africaCountries).toStrictEqual([
			{
				id: 'TGO',
				name: 'Togo',
				continet: 'Africa',
			},
			{
				id: 'BEN',
				name: 'Benin',
				continet: 'Africa',
			},
		]);
	});
});
