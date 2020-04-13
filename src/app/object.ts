export interface Iobject {
  region: {
    regionName: string;
    avgAge: number;
    avgDailyIncomeInUSD: number;
    avgDailyIncomePopulation: number;
  };
  periodType: string;
  timeToElapse: number;
  reportedCases: number;
  population: number;
  totalHospitalBeds: number;
}
