import parquetjs from "@dsnp/parquetjs";
const parquetPath = "/run/media/a/47B9-7495/food.parquet";

export const parquetScheme = new parquetjs.ParquetSchema({
  additives_n: { type: 'INT32' },
  additives_tags: { type: 'UTF8', repeated: true },
  allergens_tags: { type: 'UTF8', repeated: true },
  brands_tags: { type: 'UTF8', repeated: true },
  brands: { type: 'UTF8' },
  categories: { type: 'UTF8' },
  categories_tags: { type: 'UTF8', repeated: true },
  checkers_tags: { type: 'UTF8', repeated: true },
  ciqual_food_name_tags: { type: 'UTF8', repeated: true },
  cities_tags: { type: 'UTF8', repeated: true },
  code: { type: 'UTF8' },
  compared_to_category: { type: 'UTF8' },
  complete: { type: 'INT32' },
  completeness: { type: 'FLOAT' },
  correctors_tags: { type: 'UTF8', repeated: true },
  countries_tags: { type: 'UTF8', repeated: true },
  created_t: { type: 'INT64' },
  creator: { type: 'UTF8' },
  data_quality_errors_tags: { type: 'UTF8', repeated: true },
  data_quality_info_tags: { type: 'UTF8', repeated: true },
  data_quality_warnings_tags: { type: 'UTF8', repeated: true },
  data_sources_tags: { type: 'UTF8', repeated: true },
  ecoscore_data: { type: 'UTF8' },
  ecoscore_grade: { type: 'UTF8' },
  ecoscore_score: { type: 'INT32' },
  ecoscore_tags: { type: 'UTF8', repeated: true },
  editors: { type: 'UTF8', repeated: true },
  emb_codes_tags: { type: 'UTF8', repeated: true },
  emb_codes: { type: 'UTF8' },
  entry_dates_tags: { type: 'UTF8', repeated: true },
  food_groups_tags: { type: 'UTF8', repeated: true },
  generic_name: { type: 'UTF8', repeated: true },
  images: { type: 'UTF8', repeated: true },
  informers_tags: { type: 'UTF8', repeated: true },
  ingredients_analysis_tags: { type: 'UTF8', repeated: true },
  ingredients_from_palm_oil_n: { type: 'INT32' },
  ingredients_n: { type: 'INT32' },
  ingredients_original_tags: { type: 'UTF8', repeated: true },
  ingredients_percent_analysis: { type: 'INT32' },
  ingredients_tags: { type: 'UTF8', repeated: true },
  ingredients_text: { type: 'UTF8', repeated: true },
  ingredients_with_specified_percent_n: { type: 'INT32' },
  ingredients_with_unspecified_percent_n: { type: 'INT32' },
  ingredients_without_ciqual_codes_n: { type: 'INT32' },
  ingredients_without_ciqual_codes: { type: 'UTF8', repeated: true },
  ingredients: { type: 'UTF8' },
  known_ingredients_n: { type: 'INT32' },
  labels_tags: { type: 'UTF8', repeated: true },
  labels: { type: 'UTF8' },
  lang: { type: 'UTF8' },
  languages_tags: { type: 'UTF8', repeated: true },
  last_edit_dates_tags: { type: 'UTF8', repeated: true },
  last_editor: { type: 'UTF8' },
  last_image_t: { type: 'INT64' },
  last_modified_by: { type: 'UTF8' },
  last_modified_t: { type: 'INT64' },
  last_updated_t: { type: 'INT64' },
  link: { type: 'UTF8' },
  main_countries_tags: { type: 'UTF8', repeated: true },
  manufacturing_places_tags: { type: 'UTF8', repeated: true },
  manufacturing_places: { type: 'UTF8' },
  max_imgid: { type: 'INT32' },
  minerals_tags: { type: 'UTF8', repeated: true },
  misc_tags: { type: 'UTF8', repeated: true },
  new_additives_n: { type: 'INT32' },
  no_nutrition_data: { type: 'BOOLEAN' },
  nova_group: { type: 'INT32' },
  nova_groups_tags: { type: 'UTF8', repeated: true },
  nova_groups: { type: 'UTF8' },
  nucleotides_tags: { type: 'UTF8', repeated: true },
  nutrient_levels_tags: { type: 'UTF8', repeated: true },
  nutriments: { type: 'UTF8', repeated: true },
  nutriscore_grade: { type: 'UTF8' },
  nutriscore_score: { type: 'INT32' },
  nutrition_data_per: { type: 'UTF8' },
  obsolete: { type: 'BOOLEAN' },
  origins_tags: { type: 'UTF8', repeated: true },
  origins: { type: 'UTF8' },
  owner_fields: { type: 'UTF8', repeated: true },
  owner: { type: 'UTF8' },
  packagings_complete: { type: 'BOOLEAN' },
  packaging_recycling_tags: { type: 'UTF8', repeated: true },
  packaging_shapes_tags: { type: 'UTF8', repeated: true },
  packaging_tags: { type: 'UTF8', repeated: true },
  packaging_text: { type: 'UTF8', repeated: true },
  packaging: { type: 'UTF8' },
  packagings: { type: 'UTF8', repeated: true },
  photographers: { type: 'UTF8', repeated: true },
  popularity_key: { type: 'INT64' },
  popularity_tags: { type: 'UTF8', repeated: true },
  product_name: { type: 'UTF8', repeated: true },
  product_quantity_unit: { type: 'UTF8' },
  product_quantity: { type: 'UTF8' },
  purchase_places_tags: { type: 'UTF8', repeated: true },
  quantity: { type: 'UTF8' },
  rev: { type: 'INT32' },
  scans_n: { type: 'INT32' },
  serving_quantity: { type: 'UTF8' },
  serving_size: { type: 'UTF8' },
  states_tags: { type: 'UTF8', repeated: true },
  stores_tags: { type: 'UTF8', repeated: true },
  stores: { type: 'UTF8' },
  traces_tags: { type: 'UTF8', repeated: true },
  unique_scans_n: { type: 'INT32' },
  unknown_ingredients_n: { type: 'INT32' },
  unknown_nutrients_tags: { type: 'UTF8', repeated: true },
  vitamins_tags: { type: 'UTF8', repeated: true },
  with_non_nutritive_sweeteners: { type: 'INT32' },
  with_sweeteners: { type: 'INT32' }
});

export interface ParquetScheme {
  additives_n: number;
  additives_tags: string[];
  allergens_tags: string[];
  brands_tags: string[];
  brands: string;
  categories: string;
  categories_tags: string[];
  checkers_tags: string[];
  ciqual_food_name_tags: string[];
  cities_tags: string[];
  code: string;
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors_tags: string[];
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_errors_tags: string[];
  data_quality_info_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources_tags: string[];
  ecoscore_data: string;
  ecoscore_grade: string;
  ecoscore_score: number;
  ecoscore_tags: string[];
  editors: string[];
  emb_codes_tags: string[];
  emb_codes: string;
  entry_dates_tags: string[];
  food_groups_tags: string[];
  generic_name: string[];
  images: string[];
  informers_tags: string[];
  ingredients_analysis_tags: string[];
  ingredients_from_palm_oil_n: number;
  ingredients_n: number;
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_tags: string[];
  ingredients_text: string[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_without_ciqual_codes_n: number;
  ingredients_without_ciqual_codes: string[];
  ingredients: string;
  known_ingredients_n: number;
  labels_tags: string[];
  labels: string;
  lang: string;
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  link: string;
  main_countries_tags: string[];
  manufacturing_places_tags: string[];
  manufacturing_places: string;
  max_imgid: number;
  minerals_tags: string[];
  misc_tags: string[];
  new_additives_n: number;
  no_nutrition_data: boolean;
  nova_group: number;
  nova_groups_tags: string[];
  nova_groups: string;
  nucleotides_tags: string[];
  nutrient_levels_tags: string[];
  nutriments: string[];
  nutriscore_grade: string;
  nutriscore_score: number;
  nutrition_data_per: string;
  obsolete: boolean;
  origins_tags: string[];
  origins: string;
  owner_fields: string[];
  owner: string;
  packagings_complete: boolean;
  packaging_recycling_tags: string[];
  packaging_shapes_tags: string[];
  packaging_tags: string[];
  packaging_text: string[];
  packaging: string;
  packagings: string[];
  photographers: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string[];
  product_quantity_unit: string;
  product_quantity: string;
  purchase_places_tags: string[];
  quantity: string;
  rev: number;
  scans_n: number;
  serving_quantity: string;
  serving_size: string;
  states_tags: string[];
  stores_tags: string[];
  stores: string;
  traces_tags: string[];
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_nutrients_tags: string[];
  vitamins_tags: string[];
  with_non_nutritive_sweeteners: number;
  with_sweeteners: number;
}

export const returnParquetReader = async () => await parquetjs.ParquetReader.openFile(parquetPath);
