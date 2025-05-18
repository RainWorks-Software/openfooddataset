// product.d.ts

export interface EnvironmentalScoreAdjustmentPackaging {
  non_recyclable_and_non_biodegradable_materials: number;
  score: number;
  warning: string;
  value: number;
  packagings: Array<{
    quantity_per_unit: string;
    material: string;
    environmental_score_material_score: number;
    number_of_units: number;
    food_contact: number;
    environmental_score_shape_ratio: number;
    shape: string;
    recycling: string;
  }>;
}

export interface EnvironmentalScoreAdjustmentThreatenedSpecies {
  warning: string;
}

export interface EnvironmentalScoreAdjustmentProductionSystem {
  warning: string;
  value: number;
  labels: any[]; // Or a more specific type if the structure is known
}

export interface EnvironmentalScoreAdjustmentOriginsOfIngredients {
  warning: string;
  epi_score: number;
  origins_from_categories: string[];
  transportation_scores: { [key: string]: number };
  origins_from_origins_field: string[];
  epi_value: number;
  values: { [key: string]: number };
  aggregated_origins: Array<{
    origin: string;
    percent: number;
  }>;
  transportation_values: { [key: string]: number };
}

export interface EnvironmentalScoreData {
  adjustments: {
    packaging: EnvironmentalScoreAdjustmentPackaging;
    threatened_species: EnvironmentalScoreAdjustmentThreatenedSpecies;
    production_system: EnvironmentalScoreAdjustmentProductionSystem;
    origins_of_ingredients: EnvironmentalScoreAdjustmentOriginsOfIngredients;
  };
  grade: string;
  scores: { [key: string]: number };
  missing_data_warning: number;
  missing: {
    ingredients: number;
    labels: number;
    origins: number;
    packagings: number;
  };
  score: number;
  status: string;
  grades: { [key: string]: string };
  agribalyse: {
    code: string;
    ef_transportation: number;
    name_en: string;
    ef_processing: number;
    ef_agriculture: number;
    co2_packaging: number;
    version: string;
    agribalyse_food_code: string;
    co2_agriculture: number;
    co2_processing: number;
    ef_total: number;
    ef_packaging: number;
    co2_total: number;
    name_fr: string;
    agribalyse_proxy_food_code: string;
    score: number;
    co2_transportation: number;
    co2_consumption: number;
    dqr: string;
    ef_consumption: number;
    ef_distribution: number;
    co2_distribution: number;
    is_beverage: number;
  };
}

export interface NutriscoreDataComponent {
  id: string;
  points: number;
  unit: string;
  points_max: number;
  value: number | null;
}

export interface NutriscoreDataComponents {
  positive: NutriscoreDataComponent[];
  negative: NutriscoreDataComponent[];
}

export interface NutriscoreData2023 {
  grade: string;
  category_available: number;
  nutriscore_computed: number;
  nutrients_available: number;
  score: number;
  nutriscore_applicable: number;
  data: {
    is_red_meat_product: number;
    components: NutriscoreDataComponents;
    negative_points: number;
    positive_points: number;
    is_beverage: number;
    is_fat_oil_nuts_seeds: number;
    count_proteins: number;
    is_cheese: number;
    positive_nutrients: string[];
    count_proteins_reason: string;
    is_water: number;
    positive_points_max: number;
    negative_points_max: number;
  };
}

export interface NutriscoreData2021 {
  nutriscore_computed: number;
  category_available: number;
  grade: string;
  data: {
    sugars_value: number;
    energy_value: number;
    fiber_value: number;
    proteins_points: number;
    saturated_fat_value: number;
    sugars_points: number;
    energy_points: number;
    is_water: number;
    sugars: number;
    energy: number;
    saturated_fat_points: number;
    is_cheese: number;
    is_fat: number;
    proteins: number;
    is_beverage: number;
    sodium_value: number;
    saturated_fat: number;
    fiber: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
    fiber_points: number;
    sodium_points: number;
    sodium: number;
    positive_points: number;
    negative_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils: number;
    proteins_value: number;
  };
  nutriscore_applicable: number;
  score: number;
  nutrients_available: number;
}

export interface Nutriscore {
  "2023": NutriscoreData2023;
  "2021": NutriscoreData2021;
}

export interface ImageSizes {
  "100": { h: number; w: number };
  full: { w: number; h: number };
  "400": { w: number; h: number };
  "200"?: { w: number; h: number };
}

export interface ImageInfo {
  x1: number | null;
  y2: number | null;
  geometry: string;
  imgid: string;
  normalize: string | null;
  white_magic: string | null;
  sizes: ImageSizes;
  angle: string | number | null;
  rev: string;
  x2: number | null;
  y1: number | null;
  uploader?: string;
  uploaded_t?: number;
  orientation?: string;
  ocr?: number;
}

export interface Images {
  front_fr: ImageInfo;
  "2": ImageInfo;
  "1": ImageInfo;
  nutrition_fr: ImageInfo;
  ingredients_fr: ImageInfo;
  "3": ImageInfo;
}

export interface PackagingInfo {
  recycling: string;
  shape: string;
  number_of_units: number;
  food_contact: number;
  quantity_per_unit: string;
  material: string;
}

export interface Nutriments {
  "nutrition-score-fr": number;
  "saturated-fat_100g": number;
  proteins: number;
  "fruits-vegetables-nuts-estimate_100g": number;
  sodium_value: number;
  salt_100g: number;
  salt: number;
  fat_unit: string;
  "energy-kcal_value_computed": number;
  cocoa_serving: number;
  sodium: number;
  carbohydrates: number;
  "fruits-vegetables-nuts-estimate_unit": string;
  carbohydrates_unit: string;
  proteins_value: number;
  "fruits-vegetables-nuts-estimate": number;
  sugars_value: number;
  energy_value: number;
  salt_value: number;
  "nutrition-score-fr_100g": number;
  "saturated-fat_value": number;
  cocoa: number;
  cocoa_unit: string;
  energy: number;
  sugars: number;
  "fruits-vegetables-nuts-estimate_value": number;
  "energy-kcal": number;
  "fruits-vegetables-nuts-estimate_label": string;
  fat_100g: number;
  sugars_unit: string;
  energy_unit: string;
  "saturated-fat_unit": string;
  cocoa_label: string;
  "saturated-fat": number;
  cocoa_value: number;
  "fruits-vegetables-nuts-estimate_serving": number;
  energy_100g: number;
  sugars_100g: number;
  salt_unit: string;
  carbohydrates_100g: number;
  fat: number;
  "energy-kcal_unit": string;
  sodium_unit: string;
  "energy-kcal_value": number;
  "energy-kcal_100g": number;
  sodium_100g: number;
  carbohydrates_value: number;
  cocoa_100g: number;
  proteins_unit: string;
  proteins_100g: number;
  fat_value: number;
}


export interface Product {
  _id: string;
  lc: string;
  correctors_tags: string[];
  data_sources_tags: string[];
  data_quality_errors_tags: any[]; // Or a more specific type
  countries_hierarchy: string[];
  categories_tags: string[];
  rev: number;
  categories_old: string;
  unknown_nutrients_tags: any[]; // Or a more specific type
  removed_countries_tags: any[]; // Or a more specific type
  packaging_old: string;
  nutriscore_tags: string[];
  nucleotides_prev_tags: any[]; // Or a more specific type
  data_quality_info_tags: string[];
  nutriscore_grade: string;
  brands_old: string;
  categories_properties: {
    "agribalyse_food_code:en": string;
    "ciqual_food_code:en": string;
    "agribalyse_proxy_food_code:en": string;
  };
  codes_tags: string[];
  compared_to_category: string;
  minerals_prev_tags: any[]; // Or a more specific type
  ingredients_text_fr: string;
  nutrition_grades: string;
  ecoscore_tags: string[];
  debug_param_sorted_langs: string[];
  ingredients_text: string;
  minerals_tags: any[]; // Or a more specific type
  states_tags: string[];
  product_quantity_unit: string;
  product_name: string;
  other_nutritional_substances_tags: any[]; // Or a more specific type
  nutrition_score_warning_no_fiber: number;
  interface_version_created: string;
  origins: string;
  created_t: number;
  traces_hierarchy: any[]; // Or a more specific type
  labels_hierarchy: string[];
  max_imgid: string;
  allergens_hierarchy: string[];
  nutrition_score_beverage: number;
  update_key: string;
  complete: number;
  generic_name: string;
  languages_hierarchy: string[];
  emb_codes_orig: string;
  weighers_tags: any[]; // Or a more specific type
  nutrient_levels_tags: string[];
  brands_lc: string;
  purchase_places: string;
  environmental_score_data: EnvironmentalScoreData;
  nutriscore_version: string;
  expiration_date: string;
  emb_codes_tags: any[]; // Or a more specific type
  pnns_groups_2_tags: string[];
  generic_name_fr: string;
  last_edit_dates_tags: string[];
  nutriscore_2021_tags: string[];
  data_quality_warnings_tags: string[];
  nutrition_data_prepared_per: string;
  last_image_t: number;
  packaging_materials_tags: string[];
  pnns_groups_1_tags: string[];
  misc_tags: string[];
  categories: string;
  nutrition_data: string;
  data_quality_bugs_tags: any[]; // Or a more specific type
  packaging_recycling_tags: string[];
  pnns_groups_2: string;
  data_sources: string;
  origin: string;
  countries_lc: string;
  labels_old: string;
  pnns_groups_1: string;
  languages_codes: { [key: string]: number };
  amino_acids_prev_tags: any[]; // Or a more specific type
  popularity_key: number;
  packagings_complete: number;
  packagings: PackagingInfo[];
  nutriscore: Nutriscore;
  traces_from_user: string;
  categories_properties_tags: string[];
  allergens_tags: string[];
  allergens_lc: string;
  packaging: string;
  interface_version_modified: string;
  ingredients_text_debug: string;
  traces_lc: string;
  labels_lc: string;
  nova_group_error: string;
  images: Images;
  countries_tags: string[];
  nutrition_score_warning_fruits_vegetables_nuts_estimate: number;
  product_name_fr: string;
  creator: string;
  origins_lc: string;
  states: string;
  code: string;
  editors_tags: string[];
  brands_hierarchy: string[];
  entry_dates_tags: string[];
  photographers_tags: string[];
  nutriscore_2023_tags: string[];
  emb_codes: string;
  nutrition_score_debug: string;
  last_modified_by: string;
  brands_tags: string[];
  food_groups_tags: string[];
  nutrition_grades_tags: string[];
  quantity: string;
  nova_group_debug: string;
  origins_tags: any[]; // Or a more specific type
  nutrition_data_per: string;
  ingredients_that_may_be_from_palm_oil_tags: any[]; // Or a more specific type
  last_modified_t: number;
  languages: { [key: string]: number };
  packaging_lc: string;
  informers_tags: string[];
  allergens: string;
  packaging_text: string;
  packaging_tags: any[]; // Or a more specific type
  traces_from_ingredients: string;
  _keywords: string[];
  packaging_text_fr: string;
  manufacturing_places: string;
  countries: string;
  added_countries_tags: any[]; // Or a more specific type
  packaging_shapes_tags: string[];
  nucleotides_tags: any[]; // Or a more specific type
  stores: string;
  data_quality_tags: string[];
  ingredients_from_palm_oil_tags: any[]; // Or a more specific type
  purchase_places_tags: any[]; // Or a more specific type
  nutriscore_score_opposite: number;
  ingredients_text_with_allergens_fr: string;
  nutrient_levels: {
    fat: string;
    "saturated-fat": string;
    sugars: string;
    salt: string;
  };
  manufacturing_places_tags: any[]; // Or a more specific type
  traces: string;
  labels: string;
  category_properties: {
    "ciqual_food_name:en": string;
  };
  product_type: string;
  nutriscore_score: number;
  nutriments: Nutriments;
  last_editor: string;
  schema_version: number;
  environmental_score_tags: string[];
  link: string;
  popularity_tags: string[];
  completeness: number;
  ciqual_food_name_tags: string[];
  nova_groups_tags: string[];
  unique_scans_n: number;
  origin_fr: string;
  packaging_hierarchy: any[]; // Or a more specific type
  environmental_score_score: number;
  labels_tags: string[];
  traces_tags: any[]; // Or a more specific type
  origins_old: string;
  nutriscore_data: Omit<NutriscoreData2023, "category_available" | "nutriscore_computed" | "nutrients_available" | "nutriscore_applicable">; // Matches the inner structure
  allergens_from_user: string;
  vitamins_tags: any[]; // Or a more specific type
  nutrition_grade_fr: string;
  lang: string;
  last_image_dates_tags: string[];
  stores_tags: any[]; // Or a more specific type
  vitamins_prev_tags: any[]; // Or a more specific type
  last_updated_t: number;
  scans_n: number;
  product_quantity: number;
  main_countries_tags: any[]; // Or a more specific type
  packagings_n: number;
  states_hierarchy: string[];
  nutrition_data_prepared: string;
  food_groups: string;
  id: string;
  cities_tags: any[]; // Or a more specific type
  brands: string;
  categories_lc: string;
  packagings_materials: { [key: string]: any }; // Or a more specific type
  allergens_from_ingredients: string;
  no_nutrition_data: string;
  categories_hierarchy: string[];
  checkers_tags: any[]; // Or a more specific type
  amino_acids_tags: any[]; // Or a more specific type
  environmental_score_grade: string;
}