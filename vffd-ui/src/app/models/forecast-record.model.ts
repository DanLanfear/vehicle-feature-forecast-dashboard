export interface ForecastRecord {
  id: number;
  vehicleModel: string;
  modelYear: number;
  region: string;
  quarter: string;
  featureCode: string;
  featureName: string;
  projectedVolume: number;
  adoptionRate: number;
  lastUpdatedBy: string;
}
