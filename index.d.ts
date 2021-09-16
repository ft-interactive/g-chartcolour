/**
 * @file
 * TypeDef for g-chartcolour
 */

/* tslint:disable variable-name */

export const background: {
	web: string;
	social: string;
	video: string;
	print: string;
	clean: string;
}


export const barPrint: string[];
export const basicLineWeb: string[];
export const basicLinePrint: string[];
export const basicLineSocial: string[];
export const categorical_bar: string[];
export const categorical_line: string[];
export const diverging: string[];
export const diverging_3: string[];
export const diverging_5: string[];
export const diverging_7: string[];
export const extendedLine: string[];
export const germanPoliticalParties_bar: ICategoricalDEPolitics;
export const germanPoliticalParties_bar_social: ICategoricalDEPolitics;
export const germanPoliticalParties_line: ICategoricalDEPolitics;
export const linePrint: string[];
export const lineSocial: string[];
export const lineWeb: string[];
export const mutedFirstLinePrint: string[];
export const mutedFirstLineSocial: string[];
export const mutedFirstLineWeb: string[];
export const noData: {
  area: string;
  line: string;
}
export const sequentialMulti: string[];
export const sequentialMulti_2: string[];
export const sequentialMulti_3: string[];
export const sequentialSingle: string[];
export const sequentialSingle_teal: string[];
export const ukPoliticalParties: ICategoricalUKPolitics;
export const ukPoliticalPartiesText: ICategoricalUKPolitics;
export const ukPoliticalPartiesPrint: ICategoricalUKPolitics;
export const usPoliticalPartiesSmallArea: ICategoricalUSPolitics;
export const usPoliticalPartiesLargeArea: ICategoricalUSPolitics;

interface ICategoricalUKPolitics {
	conservative: string;
	labour: string;
	'liberal democrats': string;
	ukip: string;
	green: string;
  snp: string;
  dup: string;
  sf: string;
  pc: string;
  alliance: string;
	independent: string;
	other: string;
  sdlp: string;
  uup: string;
}

interface ICategoricalUSPolitics {
	republican: string;
	'leaning republican': string;
  swing: string;
  'leaning democrat': string;
  democrat:  string;
  libertarian:  string;
  green:  string;
}

interface ICategoricalDEPolitics {
	'CDU/CSU': string;
	'SPD': string;
	'FDP': string;
	'Left': string;
	'AfD': string;
  'Green': string;
	'Other': string;
}
