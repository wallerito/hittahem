/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: string; output: string; }
  numeric: { input: number; output: number; }
};

/** columns and relationships of "ApartmentTypes" */
export type ApartmentTypes = {
  __typename?: 'ApartmentTypes';
  /** fetch data from the table: "Apartments" */
  Apartments: Array<Apartments>;
  /** fetch aggregated fields from the table: "Apartments" */
  Apartments_aggregate: Apartments_Aggregate;
  Lagenhetstyp: Scalars['String']['output'];
};


/** columns and relationships of "ApartmentTypes" */
export type ApartmentTypesApartmentsArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


/** columns and relationships of "ApartmentTypes" */
export type ApartmentTypesApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};

/** aggregated selection of "ApartmentTypes" */
export type ApartmentTypes_Aggregate = {
  __typename?: 'ApartmentTypes_aggregate';
  aggregate?: Maybe<ApartmentTypes_Aggregate_Fields>;
  nodes: Array<ApartmentTypes>;
};

/** aggregate fields of "ApartmentTypes" */
export type ApartmentTypes_Aggregate_Fields = {
  __typename?: 'ApartmentTypes_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApartmentTypes_Max_Fields>;
  min?: Maybe<ApartmentTypes_Min_Fields>;
};


/** aggregate fields of "ApartmentTypes" */
export type ApartmentTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ApartmentTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "ApartmentTypes". All fields are combined with a logical 'AND'. */
export type ApartmentTypes_Bool_Exp = {
  Apartments?: InputMaybe<Apartments_Bool_Exp>;
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Bool_Exp>;
  Lagenhetstyp?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<ApartmentTypes_Bool_Exp>>;
  _not?: InputMaybe<ApartmentTypes_Bool_Exp>;
  _or?: InputMaybe<Array<ApartmentTypes_Bool_Exp>>;
};

/** unique or primary key constraints on table "ApartmentTypes" */
export enum ApartmentTypes_Constraint {
  /** unique or primary key constraint on columns "Lagenhetstyp" */
  ApartmentTypesPkey = 'ApartmentTypes_pkey'
}

/** input type for inserting data into table "ApartmentTypes" */
export type ApartmentTypes_Insert_Input = {
  Apartments?: InputMaybe<Apartments_Arr_Rel_Insert_Input>;
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ApartmentTypes_Max_Fields = {
  __typename?: 'ApartmentTypes_max_fields';
  Lagenhetstyp?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ApartmentTypes_Min_Fields = {
  __typename?: 'ApartmentTypes_min_fields';
  Lagenhetstyp?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "ApartmentTypes" */
export type ApartmentTypes_Mutation_Response = {
  __typename?: 'ApartmentTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ApartmentTypes>;
};

/** on_conflict condition type for table "ApartmentTypes" */
export type ApartmentTypes_On_Conflict = {
  constraint: ApartmentTypes_Constraint;
  update_columns?: Array<ApartmentTypes_Update_Column>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "ApartmentTypes". */
export type ApartmentTypes_Order_By = {
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Order_By>;
  Lagenhetstyp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ApartmentTypes */
export type ApartmentTypes_Pk_Columns_Input = {
  Lagenhetstyp: Scalars['String']['input'];
};

/** select columns of table "ApartmentTypes" */
export enum ApartmentTypes_Select_Column {
  /** column name */
  Lagenhetstyp = 'Lagenhetstyp'
}

/** input type for updating data in table "ApartmentTypes" */
export type ApartmentTypes_Set_Input = {
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "ApartmentTypes" */
export type ApartmentTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ApartmentTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ApartmentTypes_Stream_Cursor_Value_Input = {
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "ApartmentTypes" */
export enum ApartmentTypes_Update_Column {
  /** column name */
  Lagenhetstyp = 'Lagenhetstyp'
}

export type ApartmentTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApartmentTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: ApartmentTypes_Bool_Exp;
};

/** columns and relationships of "Apartments" */
export type Apartments = {
  __typename?: 'Apartments';
  AnnonsId: Scalars['numeric']['output'];
  AnnonseradFran?: Maybe<Scalars['date']['output']>;
  AnnonseradTill?: Maybe<Scalars['date']['output']>;
  Antal?: Maybe<Scalars['numeric']['output']>;
  AntalRum?: Maybe<Scalars['numeric']['output']>;
  Balkong?: Maybe<Scalars['Boolean']['output']>;
  BostadSnabbt?: Maybe<Scalars['Boolean']['output']>;
  Bostadssnabben?: Maybe<Scalars['Boolean']['output']>;
  Externko?: Maybe<Scalars['Boolean']['output']>;
  Gatuadress?: Maybe<Scalars['String']['output']>;
  Hiss?: Maybe<Scalars['Boolean']['output']>;
  HogstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  HogstaHyran?: Maybe<Scalars['numeric']['output']>;
  HogstaYtan?: Maybe<Scalars['numeric']['output']>;
  Hyra?: Maybe<Scalars['numeric']['output']>;
  Internko?: Maybe<Scalars['Boolean']['output']>;
  Ko?: Maybe<Scalars['String']['output']>;
  KoNamn?: Maybe<Scalars['String']['output']>;
  Kommun?: Maybe<Scalars['String']['output']>;
  KoordinatLatitud?: Maybe<Scalars['numeric']['output']>;
  KoordinatLongitud?: Maybe<Scalars['numeric']['output']>;
  Korttid?: Maybe<Scalars['Boolean']['output']>;
  LagenhetId?: Maybe<Scalars['numeric']['output']>;
  Lagenhetstyp?: Maybe<Scalars['String']['output']>;
  LagstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  LagstaHyran?: Maybe<Scalars['numeric']['output']>;
  LagstaYtan?: Maybe<Scalars['numeric']['output']>;
  Nyproduktion?: Maybe<Scalars['Boolean']['output']>;
  Senior?: Maybe<Scalars['Boolean']['output']>;
  Stadsdel?: Maybe<Scalars['String']['output']>;
  Student?: Maybe<Scalars['Boolean']['output']>;
  TillgangligNedsattOrienteringsformaga?: Maybe<Scalars['Boolean']['output']>;
  TillgangligNedsattRorelseformaga?: Maybe<Scalars['Boolean']['output']>;
  Ungdom?: Maybe<Scalars['Boolean']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Vaning?: Maybe<Scalars['numeric']['output']>;
  Vanlig?: Maybe<Scalars['Boolean']['output']>;
  Yta?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "Apartments" */
export type Apartments_Aggregate = {
  __typename?: 'Apartments_aggregate';
  aggregate?: Maybe<Apartments_Aggregate_Fields>;
  nodes: Array<Apartments>;
};

export type Apartments_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Apartments_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Apartments_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Apartments_Aggregate_Bool_Exp_Count>;
};

export type Apartments_Aggregate_Bool_Exp_Bool_And = {
  arguments: Apartments_Select_Column_Apartments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Apartments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apartments_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Apartments_Select_Column_Apartments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Apartments_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apartments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Apartments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Apartments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Apartments" */
export type Apartments_Aggregate_Fields = {
  __typename?: 'Apartments_aggregate_fields';
  avg?: Maybe<Apartments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Apartments_Max_Fields>;
  min?: Maybe<Apartments_Min_Fields>;
  stddev?: Maybe<Apartments_Stddev_Fields>;
  stddev_pop?: Maybe<Apartments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Apartments_Stddev_Samp_Fields>;
  sum?: Maybe<Apartments_Sum_Fields>;
  var_pop?: Maybe<Apartments_Var_Pop_Fields>;
  var_samp?: Maybe<Apartments_Var_Samp_Fields>;
  variance?: Maybe<Apartments_Variance_Fields>;
};


/** aggregate fields of "Apartments" */
export type Apartments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Apartments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Apartments" */
export type Apartments_Aggregate_Order_By = {
  avg?: InputMaybe<Apartments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Apartments_Max_Order_By>;
  min?: InputMaybe<Apartments_Min_Order_By>;
  stddev?: InputMaybe<Apartments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Apartments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Apartments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Apartments_Sum_Order_By>;
  var_pop?: InputMaybe<Apartments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Apartments_Var_Samp_Order_By>;
  variance?: InputMaybe<Apartments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Apartments" */
export type Apartments_Arr_Rel_Insert_Input = {
  data: Array<Apartments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Apartments_On_Conflict>;
};

/** aggregate avg on columns */
export type Apartments_Avg_Fields = {
  __typename?: 'Apartments_avg_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Apartments" */
export type Apartments_Avg_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Apartments". All fields are combined with a logical 'AND'. */
export type Apartments_Bool_Exp = {
  AnnonsId?: InputMaybe<Numeric_Comparison_Exp>;
  AnnonseradFran?: InputMaybe<Date_Comparison_Exp>;
  AnnonseradTill?: InputMaybe<Date_Comparison_Exp>;
  Antal?: InputMaybe<Numeric_Comparison_Exp>;
  AntalRum?: InputMaybe<Numeric_Comparison_Exp>;
  Balkong?: InputMaybe<Boolean_Comparison_Exp>;
  BostadSnabbt?: InputMaybe<Boolean_Comparison_Exp>;
  Bostadssnabben?: InputMaybe<Boolean_Comparison_Exp>;
  Externko?: InputMaybe<Boolean_Comparison_Exp>;
  Gatuadress?: InputMaybe<String_Comparison_Exp>;
  Hiss?: InputMaybe<Boolean_Comparison_Exp>;
  HogstaAntalRum?: InputMaybe<Numeric_Comparison_Exp>;
  HogstaHyran?: InputMaybe<Numeric_Comparison_Exp>;
  HogstaYtan?: InputMaybe<Numeric_Comparison_Exp>;
  Hyra?: InputMaybe<Numeric_Comparison_Exp>;
  Internko?: InputMaybe<Boolean_Comparison_Exp>;
  Ko?: InputMaybe<String_Comparison_Exp>;
  KoNamn?: InputMaybe<String_Comparison_Exp>;
  Kommun?: InputMaybe<String_Comparison_Exp>;
  KoordinatLatitud?: InputMaybe<Numeric_Comparison_Exp>;
  KoordinatLongitud?: InputMaybe<Numeric_Comparison_Exp>;
  Korttid?: InputMaybe<Boolean_Comparison_Exp>;
  LagenhetId?: InputMaybe<Numeric_Comparison_Exp>;
  Lagenhetstyp?: InputMaybe<String_Comparison_Exp>;
  LagstaAntalRum?: InputMaybe<Numeric_Comparison_Exp>;
  LagstaHyran?: InputMaybe<Numeric_Comparison_Exp>;
  LagstaYtan?: InputMaybe<Numeric_Comparison_Exp>;
  Nyproduktion?: InputMaybe<Boolean_Comparison_Exp>;
  Senior?: InputMaybe<Boolean_Comparison_Exp>;
  Stadsdel?: InputMaybe<String_Comparison_Exp>;
  Student?: InputMaybe<Boolean_Comparison_Exp>;
  TillgangligNedsattOrienteringsformaga?: InputMaybe<Boolean_Comparison_Exp>;
  TillgangligNedsattRorelseformaga?: InputMaybe<Boolean_Comparison_Exp>;
  Ungdom?: InputMaybe<Boolean_Comparison_Exp>;
  Url?: InputMaybe<String_Comparison_Exp>;
  Vaning?: InputMaybe<Numeric_Comparison_Exp>;
  Vanlig?: InputMaybe<Boolean_Comparison_Exp>;
  Yta?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<Apartments_Bool_Exp>>;
  _not?: InputMaybe<Apartments_Bool_Exp>;
  _or?: InputMaybe<Array<Apartments_Bool_Exp>>;
};

/** unique or primary key constraints on table "Apartments" */
export enum Apartments_Constraint {
  /** unique or primary key constraint on columns "AnnonsId" */
  ApartmentsPkey = 'Apartments_pkey'
}

/** input type for incrementing numeric columns in table "Apartments" */
export type Apartments_Inc_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  Antal?: InputMaybe<Scalars['numeric']['input']>;
  AntalRum?: InputMaybe<Scalars['numeric']['input']>;
  HogstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  HogstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  HogstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Hyra?: InputMaybe<Scalars['numeric']['input']>;
  KoordinatLatitud?: InputMaybe<Scalars['numeric']['input']>;
  KoordinatLongitud?: InputMaybe<Scalars['numeric']['input']>;
  LagenhetId?: InputMaybe<Scalars['numeric']['input']>;
  LagstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  LagstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  LagstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Vaning?: InputMaybe<Scalars['numeric']['input']>;
  Yta?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "Apartments" */
export type Apartments_Insert_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  AnnonseradFran?: InputMaybe<Scalars['date']['input']>;
  AnnonseradTill?: InputMaybe<Scalars['date']['input']>;
  Antal?: InputMaybe<Scalars['numeric']['input']>;
  AntalRum?: InputMaybe<Scalars['numeric']['input']>;
  Balkong?: InputMaybe<Scalars['Boolean']['input']>;
  BostadSnabbt?: InputMaybe<Scalars['Boolean']['input']>;
  Bostadssnabben?: InputMaybe<Scalars['Boolean']['input']>;
  Externko?: InputMaybe<Scalars['Boolean']['input']>;
  Gatuadress?: InputMaybe<Scalars['String']['input']>;
  Hiss?: InputMaybe<Scalars['Boolean']['input']>;
  HogstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  HogstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  HogstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Hyra?: InputMaybe<Scalars['numeric']['input']>;
  Internko?: InputMaybe<Scalars['Boolean']['input']>;
  Ko?: InputMaybe<Scalars['String']['input']>;
  KoNamn?: InputMaybe<Scalars['String']['input']>;
  Kommun?: InputMaybe<Scalars['String']['input']>;
  KoordinatLatitud?: InputMaybe<Scalars['numeric']['input']>;
  KoordinatLongitud?: InputMaybe<Scalars['numeric']['input']>;
  Korttid?: InputMaybe<Scalars['Boolean']['input']>;
  LagenhetId?: InputMaybe<Scalars['numeric']['input']>;
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
  LagstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  LagstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  LagstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Nyproduktion?: InputMaybe<Scalars['Boolean']['input']>;
  Senior?: InputMaybe<Scalars['Boolean']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
  Student?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattOrienteringsformaga?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattRorelseformaga?: InputMaybe<Scalars['Boolean']['input']>;
  Ungdom?: InputMaybe<Scalars['Boolean']['input']>;
  Url?: InputMaybe<Scalars['String']['input']>;
  Vaning?: InputMaybe<Scalars['numeric']['input']>;
  Vanlig?: InputMaybe<Scalars['Boolean']['input']>;
  Yta?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Apartments_Max_Fields = {
  __typename?: 'Apartments_max_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  AnnonseradFran?: Maybe<Scalars['date']['output']>;
  AnnonseradTill?: Maybe<Scalars['date']['output']>;
  Antal?: Maybe<Scalars['numeric']['output']>;
  AntalRum?: Maybe<Scalars['numeric']['output']>;
  Gatuadress?: Maybe<Scalars['String']['output']>;
  HogstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  HogstaHyran?: Maybe<Scalars['numeric']['output']>;
  HogstaYtan?: Maybe<Scalars['numeric']['output']>;
  Hyra?: Maybe<Scalars['numeric']['output']>;
  Ko?: Maybe<Scalars['String']['output']>;
  KoNamn?: Maybe<Scalars['String']['output']>;
  Kommun?: Maybe<Scalars['String']['output']>;
  KoordinatLatitud?: Maybe<Scalars['numeric']['output']>;
  KoordinatLongitud?: Maybe<Scalars['numeric']['output']>;
  LagenhetId?: Maybe<Scalars['numeric']['output']>;
  Lagenhetstyp?: Maybe<Scalars['String']['output']>;
  LagstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  LagstaHyran?: Maybe<Scalars['numeric']['output']>;
  LagstaYtan?: Maybe<Scalars['numeric']['output']>;
  Stadsdel?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Vaning?: Maybe<Scalars['numeric']['output']>;
  Yta?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "Apartments" */
export type Apartments_Max_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  AnnonseradFran?: InputMaybe<Order_By>;
  AnnonseradTill?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  Gatuadress?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  Ko?: InputMaybe<Order_By>;
  KoNamn?: InputMaybe<Order_By>;
  Kommun?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  Lagenhetstyp?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
  Url?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Apartments_Min_Fields = {
  __typename?: 'Apartments_min_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  AnnonseradFran?: Maybe<Scalars['date']['output']>;
  AnnonseradTill?: Maybe<Scalars['date']['output']>;
  Antal?: Maybe<Scalars['numeric']['output']>;
  AntalRum?: Maybe<Scalars['numeric']['output']>;
  Gatuadress?: Maybe<Scalars['String']['output']>;
  HogstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  HogstaHyran?: Maybe<Scalars['numeric']['output']>;
  HogstaYtan?: Maybe<Scalars['numeric']['output']>;
  Hyra?: Maybe<Scalars['numeric']['output']>;
  Ko?: Maybe<Scalars['String']['output']>;
  KoNamn?: Maybe<Scalars['String']['output']>;
  Kommun?: Maybe<Scalars['String']['output']>;
  KoordinatLatitud?: Maybe<Scalars['numeric']['output']>;
  KoordinatLongitud?: Maybe<Scalars['numeric']['output']>;
  LagenhetId?: Maybe<Scalars['numeric']['output']>;
  Lagenhetstyp?: Maybe<Scalars['String']['output']>;
  LagstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  LagstaHyran?: Maybe<Scalars['numeric']['output']>;
  LagstaYtan?: Maybe<Scalars['numeric']['output']>;
  Stadsdel?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Vaning?: Maybe<Scalars['numeric']['output']>;
  Yta?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "Apartments" */
export type Apartments_Min_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  AnnonseradFran?: InputMaybe<Order_By>;
  AnnonseradTill?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  Gatuadress?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  Ko?: InputMaybe<Order_By>;
  KoNamn?: InputMaybe<Order_By>;
  Kommun?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  Lagenhetstyp?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
  Url?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Apartments" */
export type Apartments_Mutation_Response = {
  __typename?: 'Apartments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Apartments>;
};

/** input type for inserting object relation for remote table "Apartments" */
export type Apartments_Obj_Rel_Insert_Input = {
  data: Apartments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Apartments_On_Conflict>;
};

/** on_conflict condition type for table "Apartments" */
export type Apartments_On_Conflict = {
  constraint: Apartments_Constraint;
  update_columns?: Array<Apartments_Update_Column>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};

/** Ordering options when selecting data from "Apartments". */
export type Apartments_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  AnnonseradFran?: InputMaybe<Order_By>;
  AnnonseradTill?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  Balkong?: InputMaybe<Order_By>;
  BostadSnabbt?: InputMaybe<Order_By>;
  Bostadssnabben?: InputMaybe<Order_By>;
  Externko?: InputMaybe<Order_By>;
  Gatuadress?: InputMaybe<Order_By>;
  Hiss?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  Internko?: InputMaybe<Order_By>;
  Ko?: InputMaybe<Order_By>;
  KoNamn?: InputMaybe<Order_By>;
  Kommun?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  Korttid?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  Lagenhetstyp?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Nyproduktion?: InputMaybe<Order_By>;
  Senior?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
  Student?: InputMaybe<Order_By>;
  TillgangligNedsattOrienteringsformaga?: InputMaybe<Order_By>;
  TillgangligNedsattRorelseformaga?: InputMaybe<Order_By>;
  Ungdom?: InputMaybe<Order_By>;
  Url?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Vanlig?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Apartments */
export type Apartments_Pk_Columns_Input = {
  AnnonsId: Scalars['numeric']['input'];
};

/** select columns of table "Apartments" */
export enum Apartments_Select_Column {
  /** column name */
  AnnonsId = 'AnnonsId',
  /** column name */
  AnnonseradFran = 'AnnonseradFran',
  /** column name */
  AnnonseradTill = 'AnnonseradTill',
  /** column name */
  Antal = 'Antal',
  /** column name */
  AntalRum = 'AntalRum',
  /** column name */
  Balkong = 'Balkong',
  /** column name */
  BostadSnabbt = 'BostadSnabbt',
  /** column name */
  Bostadssnabben = 'Bostadssnabben',
  /** column name */
  Externko = 'Externko',
  /** column name */
  Gatuadress = 'Gatuadress',
  /** column name */
  Hiss = 'Hiss',
  /** column name */
  HogstaAntalRum = 'HogstaAntalRum',
  /** column name */
  HogstaHyran = 'HogstaHyran',
  /** column name */
  HogstaYtan = 'HogstaYtan',
  /** column name */
  Hyra = 'Hyra',
  /** column name */
  Internko = 'Internko',
  /** column name */
  Ko = 'Ko',
  /** column name */
  KoNamn = 'KoNamn',
  /** column name */
  Kommun = 'Kommun',
  /** column name */
  KoordinatLatitud = 'KoordinatLatitud',
  /** column name */
  KoordinatLongitud = 'KoordinatLongitud',
  /** column name */
  Korttid = 'Korttid',
  /** column name */
  LagenhetId = 'LagenhetId',
  /** column name */
  Lagenhetstyp = 'Lagenhetstyp',
  /** column name */
  LagstaAntalRum = 'LagstaAntalRum',
  /** column name */
  LagstaHyran = 'LagstaHyran',
  /** column name */
  LagstaYtan = 'LagstaYtan',
  /** column name */
  Nyproduktion = 'Nyproduktion',
  /** column name */
  Senior = 'Senior',
  /** column name */
  Stadsdel = 'Stadsdel',
  /** column name */
  Student = 'Student',
  /** column name */
  TillgangligNedsattOrienteringsformaga = 'TillgangligNedsattOrienteringsformaga',
  /** column name */
  TillgangligNedsattRorelseformaga = 'TillgangligNedsattRorelseformaga',
  /** column name */
  Ungdom = 'Ungdom',
  /** column name */
  Url = 'Url',
  /** column name */
  Vaning = 'Vaning',
  /** column name */
  Vanlig = 'Vanlig',
  /** column name */
  Yta = 'Yta'
}

/** select "Apartments_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Apartments" */
export enum Apartments_Select_Column_Apartments_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Balkong = 'Balkong',
  /** column name */
  BostadSnabbt = 'BostadSnabbt',
  /** column name */
  Bostadssnabben = 'Bostadssnabben',
  /** column name */
  Externko = 'Externko',
  /** column name */
  Hiss = 'Hiss',
  /** column name */
  Internko = 'Internko',
  /** column name */
  Korttid = 'Korttid',
  /** column name */
  Nyproduktion = 'Nyproduktion',
  /** column name */
  Senior = 'Senior',
  /** column name */
  Student = 'Student',
  /** column name */
  TillgangligNedsattOrienteringsformaga = 'TillgangligNedsattOrienteringsformaga',
  /** column name */
  TillgangligNedsattRorelseformaga = 'TillgangligNedsattRorelseformaga',
  /** column name */
  Ungdom = 'Ungdom',
  /** column name */
  Vanlig = 'Vanlig'
}

/** select "Apartments_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Apartments" */
export enum Apartments_Select_Column_Apartments_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Balkong = 'Balkong',
  /** column name */
  BostadSnabbt = 'BostadSnabbt',
  /** column name */
  Bostadssnabben = 'Bostadssnabben',
  /** column name */
  Externko = 'Externko',
  /** column name */
  Hiss = 'Hiss',
  /** column name */
  Internko = 'Internko',
  /** column name */
  Korttid = 'Korttid',
  /** column name */
  Nyproduktion = 'Nyproduktion',
  /** column name */
  Senior = 'Senior',
  /** column name */
  Student = 'Student',
  /** column name */
  TillgangligNedsattOrienteringsformaga = 'TillgangligNedsattOrienteringsformaga',
  /** column name */
  TillgangligNedsattRorelseformaga = 'TillgangligNedsattRorelseformaga',
  /** column name */
  Ungdom = 'Ungdom',
  /** column name */
  Vanlig = 'Vanlig'
}

/** input type for updating data in table "Apartments" */
export type Apartments_Set_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  AnnonseradFran?: InputMaybe<Scalars['date']['input']>;
  AnnonseradTill?: InputMaybe<Scalars['date']['input']>;
  Antal?: InputMaybe<Scalars['numeric']['input']>;
  AntalRum?: InputMaybe<Scalars['numeric']['input']>;
  Balkong?: InputMaybe<Scalars['Boolean']['input']>;
  BostadSnabbt?: InputMaybe<Scalars['Boolean']['input']>;
  Bostadssnabben?: InputMaybe<Scalars['Boolean']['input']>;
  Externko?: InputMaybe<Scalars['Boolean']['input']>;
  Gatuadress?: InputMaybe<Scalars['String']['input']>;
  Hiss?: InputMaybe<Scalars['Boolean']['input']>;
  HogstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  HogstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  HogstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Hyra?: InputMaybe<Scalars['numeric']['input']>;
  Internko?: InputMaybe<Scalars['Boolean']['input']>;
  Ko?: InputMaybe<Scalars['String']['input']>;
  KoNamn?: InputMaybe<Scalars['String']['input']>;
  Kommun?: InputMaybe<Scalars['String']['input']>;
  KoordinatLatitud?: InputMaybe<Scalars['numeric']['input']>;
  KoordinatLongitud?: InputMaybe<Scalars['numeric']['input']>;
  Korttid?: InputMaybe<Scalars['Boolean']['input']>;
  LagenhetId?: InputMaybe<Scalars['numeric']['input']>;
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
  LagstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  LagstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  LagstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Nyproduktion?: InputMaybe<Scalars['Boolean']['input']>;
  Senior?: InputMaybe<Scalars['Boolean']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
  Student?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattOrienteringsformaga?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattRorelseformaga?: InputMaybe<Scalars['Boolean']['input']>;
  Ungdom?: InputMaybe<Scalars['Boolean']['input']>;
  Url?: InputMaybe<Scalars['String']['input']>;
  Vaning?: InputMaybe<Scalars['numeric']['input']>;
  Vanlig?: InputMaybe<Scalars['Boolean']['input']>;
  Yta?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Apartments_Stddev_Fields = {
  __typename?: 'Apartments_stddev_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Apartments" */
export type Apartments_Stddev_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Apartments_Stddev_Pop_Fields = {
  __typename?: 'Apartments_stddev_pop_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Apartments" */
export type Apartments_Stddev_Pop_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Apartments_Stddev_Samp_Fields = {
  __typename?: 'Apartments_stddev_samp_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Apartments" */
export type Apartments_Stddev_Samp_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Apartments" */
export type Apartments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Apartments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Apartments_Stream_Cursor_Value_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  AnnonseradFran?: InputMaybe<Scalars['date']['input']>;
  AnnonseradTill?: InputMaybe<Scalars['date']['input']>;
  Antal?: InputMaybe<Scalars['numeric']['input']>;
  AntalRum?: InputMaybe<Scalars['numeric']['input']>;
  Balkong?: InputMaybe<Scalars['Boolean']['input']>;
  BostadSnabbt?: InputMaybe<Scalars['Boolean']['input']>;
  Bostadssnabben?: InputMaybe<Scalars['Boolean']['input']>;
  Externko?: InputMaybe<Scalars['Boolean']['input']>;
  Gatuadress?: InputMaybe<Scalars['String']['input']>;
  Hiss?: InputMaybe<Scalars['Boolean']['input']>;
  HogstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  HogstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  HogstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Hyra?: InputMaybe<Scalars['numeric']['input']>;
  Internko?: InputMaybe<Scalars['Boolean']['input']>;
  Ko?: InputMaybe<Scalars['String']['input']>;
  KoNamn?: InputMaybe<Scalars['String']['input']>;
  Kommun?: InputMaybe<Scalars['String']['input']>;
  KoordinatLatitud?: InputMaybe<Scalars['numeric']['input']>;
  KoordinatLongitud?: InputMaybe<Scalars['numeric']['input']>;
  Korttid?: InputMaybe<Scalars['Boolean']['input']>;
  LagenhetId?: InputMaybe<Scalars['numeric']['input']>;
  Lagenhetstyp?: InputMaybe<Scalars['String']['input']>;
  LagstaAntalRum?: InputMaybe<Scalars['numeric']['input']>;
  LagstaHyran?: InputMaybe<Scalars['numeric']['input']>;
  LagstaYtan?: InputMaybe<Scalars['numeric']['input']>;
  Nyproduktion?: InputMaybe<Scalars['Boolean']['input']>;
  Senior?: InputMaybe<Scalars['Boolean']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
  Student?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattOrienteringsformaga?: InputMaybe<Scalars['Boolean']['input']>;
  TillgangligNedsattRorelseformaga?: InputMaybe<Scalars['Boolean']['input']>;
  Ungdom?: InputMaybe<Scalars['Boolean']['input']>;
  Url?: InputMaybe<Scalars['String']['input']>;
  Vaning?: InputMaybe<Scalars['numeric']['input']>;
  Vanlig?: InputMaybe<Scalars['Boolean']['input']>;
  Yta?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Apartments_Sum_Fields = {
  __typename?: 'Apartments_sum_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  Antal?: Maybe<Scalars['numeric']['output']>;
  AntalRum?: Maybe<Scalars['numeric']['output']>;
  HogstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  HogstaHyran?: Maybe<Scalars['numeric']['output']>;
  HogstaYtan?: Maybe<Scalars['numeric']['output']>;
  Hyra?: Maybe<Scalars['numeric']['output']>;
  KoordinatLatitud?: Maybe<Scalars['numeric']['output']>;
  KoordinatLongitud?: Maybe<Scalars['numeric']['output']>;
  LagenhetId?: Maybe<Scalars['numeric']['output']>;
  LagstaAntalRum?: Maybe<Scalars['numeric']['output']>;
  LagstaHyran?: Maybe<Scalars['numeric']['output']>;
  LagstaYtan?: Maybe<Scalars['numeric']['output']>;
  Vaning?: Maybe<Scalars['numeric']['output']>;
  Yta?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "Apartments" */
export type Apartments_Sum_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** update columns of table "Apartments" */
export enum Apartments_Update_Column {
  /** column name */
  AnnonsId = 'AnnonsId',
  /** column name */
  AnnonseradFran = 'AnnonseradFran',
  /** column name */
  AnnonseradTill = 'AnnonseradTill',
  /** column name */
  Antal = 'Antal',
  /** column name */
  AntalRum = 'AntalRum',
  /** column name */
  Balkong = 'Balkong',
  /** column name */
  BostadSnabbt = 'BostadSnabbt',
  /** column name */
  Bostadssnabben = 'Bostadssnabben',
  /** column name */
  Externko = 'Externko',
  /** column name */
  Gatuadress = 'Gatuadress',
  /** column name */
  Hiss = 'Hiss',
  /** column name */
  HogstaAntalRum = 'HogstaAntalRum',
  /** column name */
  HogstaHyran = 'HogstaHyran',
  /** column name */
  HogstaYtan = 'HogstaYtan',
  /** column name */
  Hyra = 'Hyra',
  /** column name */
  Internko = 'Internko',
  /** column name */
  Ko = 'Ko',
  /** column name */
  KoNamn = 'KoNamn',
  /** column name */
  Kommun = 'Kommun',
  /** column name */
  KoordinatLatitud = 'KoordinatLatitud',
  /** column name */
  KoordinatLongitud = 'KoordinatLongitud',
  /** column name */
  Korttid = 'Korttid',
  /** column name */
  LagenhetId = 'LagenhetId',
  /** column name */
  Lagenhetstyp = 'Lagenhetstyp',
  /** column name */
  LagstaAntalRum = 'LagstaAntalRum',
  /** column name */
  LagstaHyran = 'LagstaHyran',
  /** column name */
  LagstaYtan = 'LagstaYtan',
  /** column name */
  Nyproduktion = 'Nyproduktion',
  /** column name */
  Senior = 'Senior',
  /** column name */
  Stadsdel = 'Stadsdel',
  /** column name */
  Student = 'Student',
  /** column name */
  TillgangligNedsattOrienteringsformaga = 'TillgangligNedsattOrienteringsformaga',
  /** column name */
  TillgangligNedsattRorelseformaga = 'TillgangligNedsattRorelseformaga',
  /** column name */
  Ungdom = 'Ungdom',
  /** column name */
  Url = 'Url',
  /** column name */
  Vaning = 'Vaning',
  /** column name */
  Vanlig = 'Vanlig',
  /** column name */
  Yta = 'Yta'
}

export type Apartments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Apartments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Apartments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Apartments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Apartments_Var_Pop_Fields = {
  __typename?: 'Apartments_var_pop_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Apartments" */
export type Apartments_Var_Pop_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Apartments_Var_Samp_Fields = {
  __typename?: 'Apartments_var_samp_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Apartments" */
export type Apartments_Var_Samp_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Apartments_Variance_Fields = {
  __typename?: 'Apartments_variance_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  Antal?: Maybe<Scalars['Float']['output']>;
  AntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaAntalRum?: Maybe<Scalars['Float']['output']>;
  HogstaHyran?: Maybe<Scalars['Float']['output']>;
  HogstaYtan?: Maybe<Scalars['Float']['output']>;
  Hyra?: Maybe<Scalars['Float']['output']>;
  KoordinatLatitud?: Maybe<Scalars['Float']['output']>;
  KoordinatLongitud?: Maybe<Scalars['Float']['output']>;
  LagenhetId?: Maybe<Scalars['Float']['output']>;
  LagstaAntalRum?: Maybe<Scalars['Float']['output']>;
  LagstaHyran?: Maybe<Scalars['Float']['output']>;
  LagstaYtan?: Maybe<Scalars['Float']['output']>;
  Vaning?: Maybe<Scalars['Float']['output']>;
  Yta?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Apartments" */
export type Apartments_Variance_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Antal?: InputMaybe<Order_By>;
  AntalRum?: InputMaybe<Order_By>;
  HogstaAntalRum?: InputMaybe<Order_By>;
  HogstaHyran?: InputMaybe<Order_By>;
  HogstaYtan?: InputMaybe<Order_By>;
  Hyra?: InputMaybe<Order_By>;
  KoordinatLatitud?: InputMaybe<Order_By>;
  KoordinatLongitud?: InputMaybe<Order_By>;
  LagenhetId?: InputMaybe<Order_By>;
  LagstaAntalRum?: InputMaybe<Order_By>;
  LagstaHyran?: InputMaybe<Order_By>;
  LagstaYtan?: InputMaybe<Order_By>;
  Vaning?: InputMaybe<Order_By>;
  Yta?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "Districts" */
export type Districts = {
  __typename?: 'Districts';
  /** fetch data from the table: "Apartments" */
  Apartments: Array<Apartments>;
  /** fetch aggregated fields from the table: "Apartments" */
  Apartments_aggregate: Apartments_Aggregate;
  Kommun: Scalars['String']['output'];
  Stadsdel: Scalars['String']['output'];
};


/** columns and relationships of "Districts" */
export type DistrictsApartmentsArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


/** columns and relationships of "Districts" */
export type DistrictsApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};

/** aggregated selection of "Districts" */
export type Districts_Aggregate = {
  __typename?: 'Districts_aggregate';
  aggregate?: Maybe<Districts_Aggregate_Fields>;
  nodes: Array<Districts>;
};

export type Districts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Districts_Aggregate_Bool_Exp_Count>;
};

export type Districts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Districts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Districts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Districts" */
export type Districts_Aggregate_Fields = {
  __typename?: 'Districts_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Districts_Max_Fields>;
  min?: Maybe<Districts_Min_Fields>;
};


/** aggregate fields of "Districts" */
export type Districts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Districts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Districts" */
export type Districts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Districts_Max_Order_By>;
  min?: InputMaybe<Districts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Districts" */
export type Districts_Arr_Rel_Insert_Input = {
  data: Array<Districts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Districts". All fields are combined with a logical 'AND'. */
export type Districts_Bool_Exp = {
  Apartments?: InputMaybe<Apartments_Bool_Exp>;
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Bool_Exp>;
  Kommun?: InputMaybe<String_Comparison_Exp>;
  Stadsdel?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Districts_Bool_Exp>>;
  _not?: InputMaybe<Districts_Bool_Exp>;
  _or?: InputMaybe<Array<Districts_Bool_Exp>>;
};

/** unique or primary key constraints on table "Districts" */
export enum Districts_Constraint {
  /** unique or primary key constraint on columns "Kommun", "Stadsdel" */
  DistrictsPkey = 'Districts_pkey'
}

/** input type for inserting data into table "Districts" */
export type Districts_Insert_Input = {
  Apartments?: InputMaybe<Apartments_Arr_Rel_Insert_Input>;
  Kommun?: InputMaybe<Scalars['String']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Districts_Max_Fields = {
  __typename?: 'Districts_max_fields';
  Kommun?: Maybe<Scalars['String']['output']>;
  Stadsdel?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "Districts" */
export type Districts_Max_Order_By = {
  Kommun?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Districts_Min_Fields = {
  __typename?: 'Districts_min_fields';
  Kommun?: Maybe<Scalars['String']['output']>;
  Stadsdel?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "Districts" */
export type Districts_Min_Order_By = {
  Kommun?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Districts" */
export type Districts_Mutation_Response = {
  __typename?: 'Districts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Districts>;
};

/** on_conflict condition type for table "Districts" */
export type Districts_On_Conflict = {
  constraint: Districts_Constraint;
  update_columns?: Array<Districts_Update_Column>;
  where?: InputMaybe<Districts_Bool_Exp>;
};

/** Ordering options when selecting data from "Districts". */
export type Districts_Order_By = {
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Order_By>;
  Kommun?: InputMaybe<Order_By>;
  Stadsdel?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Districts */
export type Districts_Pk_Columns_Input = {
  Kommun: Scalars['String']['input'];
  Stadsdel: Scalars['String']['input'];
};

/** select columns of table "Districts" */
export enum Districts_Select_Column {
  /** column name */
  Kommun = 'Kommun',
  /** column name */
  Stadsdel = 'Stadsdel'
}

/** input type for updating data in table "Districts" */
export type Districts_Set_Input = {
  Kommun?: InputMaybe<Scalars['String']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "Districts" */
export type Districts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Districts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Districts_Stream_Cursor_Value_Input = {
  Kommun?: InputMaybe<Scalars['String']['input']>;
  Stadsdel?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "Districts" */
export enum Districts_Update_Column {
  /** column name */
  Kommun = 'Kommun',
  /** column name */
  Stadsdel = 'Stadsdel'
}

export type Districts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Districts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Districts_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "Municipalities" */
export type Municipalities = {
  __typename?: 'Municipalities';
  /** fetch data from the table: "Apartments" */
  Apartments: Array<Apartments>;
  /** fetch aggregated fields from the table: "Apartments" */
  Apartments_aggregate: Apartments_Aggregate;
  /** fetch data from the table: "Districts" */
  Districts: Array<Districts>;
  /** fetch aggregated fields from the table: "Districts" */
  Districts_aggregate: Districts_Aggregate;
  Kommun: Scalars['String']['output'];
};


/** columns and relationships of "Municipalities" */
export type MunicipalitiesApartmentsArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


/** columns and relationships of "Municipalities" */
export type MunicipalitiesApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


/** columns and relationships of "Municipalities" */
export type MunicipalitiesDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


/** columns and relationships of "Municipalities" */
export type MunicipalitiesDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};

/** aggregated selection of "Municipalities" */
export type Municipalities_Aggregate = {
  __typename?: 'Municipalities_aggregate';
  aggregate?: Maybe<Municipalities_Aggregate_Fields>;
  nodes: Array<Municipalities>;
};

/** aggregate fields of "Municipalities" */
export type Municipalities_Aggregate_Fields = {
  __typename?: 'Municipalities_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Municipalities_Max_Fields>;
  min?: Maybe<Municipalities_Min_Fields>;
};


/** aggregate fields of "Municipalities" */
export type Municipalities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Municipalities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "Municipalities". All fields are combined with a logical 'AND'. */
export type Municipalities_Bool_Exp = {
  Apartments?: InputMaybe<Apartments_Bool_Exp>;
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Bool_Exp>;
  Districts?: InputMaybe<Districts_Bool_Exp>;
  Districts_aggregate?: InputMaybe<Districts_Aggregate_Bool_Exp>;
  Kommun?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Municipalities_Bool_Exp>>;
  _not?: InputMaybe<Municipalities_Bool_Exp>;
  _or?: InputMaybe<Array<Municipalities_Bool_Exp>>;
};

/** unique or primary key constraints on table "Municipalities" */
export enum Municipalities_Constraint {
  /** unique or primary key constraint on columns "Kommun" */
  MunicipalitiesPkey = 'Municipalities_pkey'
}

/** input type for inserting data into table "Municipalities" */
export type Municipalities_Insert_Input = {
  Apartments?: InputMaybe<Apartments_Arr_Rel_Insert_Input>;
  Districts?: InputMaybe<Districts_Arr_Rel_Insert_Input>;
  Kommun?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Municipalities_Max_Fields = {
  __typename?: 'Municipalities_max_fields';
  Kommun?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Municipalities_Min_Fields = {
  __typename?: 'Municipalities_min_fields';
  Kommun?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Municipalities" */
export type Municipalities_Mutation_Response = {
  __typename?: 'Municipalities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Municipalities>;
};

/** on_conflict condition type for table "Municipalities" */
export type Municipalities_On_Conflict = {
  constraint: Municipalities_Constraint;
  update_columns?: Array<Municipalities_Update_Column>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};

/** Ordering options when selecting data from "Municipalities". */
export type Municipalities_Order_By = {
  Apartments_aggregate?: InputMaybe<Apartments_Aggregate_Order_By>;
  Districts_aggregate?: InputMaybe<Districts_Aggregate_Order_By>;
  Kommun?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Municipalities */
export type Municipalities_Pk_Columns_Input = {
  Kommun: Scalars['String']['input'];
};

/** select columns of table "Municipalities" */
export enum Municipalities_Select_Column {
  /** column name */
  Kommun = 'Kommun'
}

/** input type for updating data in table "Municipalities" */
export type Municipalities_Set_Input = {
  Kommun?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "Municipalities" */
export type Municipalities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Municipalities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Municipalities_Stream_Cursor_Value_Input = {
  Kommun?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "Municipalities" */
export enum Municipalities_Update_Column {
  /** column name */
  Kommun = 'Kommun'
}

export type Municipalities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Municipalities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Municipalities_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "UserApartments" */
export type UserApartments = {
  __typename?: 'UserApartments';
  AnnonsId: Scalars['numeric']['output'];
  /** An object relationship */
  Apartment?: Maybe<Apartments>;
  UserId: Scalars['numeric']['output'];
};

/** aggregated selection of "UserApartments" */
export type UserApartments_Aggregate = {
  __typename?: 'UserApartments_aggregate';
  aggregate?: Maybe<UserApartments_Aggregate_Fields>;
  nodes: Array<UserApartments>;
};

export type UserApartments_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserApartments_Aggregate_Bool_Exp_Count>;
};

export type UserApartments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserApartments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserApartments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "UserApartments" */
export type UserApartments_Aggregate_Fields = {
  __typename?: 'UserApartments_aggregate_fields';
  avg?: Maybe<UserApartments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UserApartments_Max_Fields>;
  min?: Maybe<UserApartments_Min_Fields>;
  stddev?: Maybe<UserApartments_Stddev_Fields>;
  stddev_pop?: Maybe<UserApartments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<UserApartments_Stddev_Samp_Fields>;
  sum?: Maybe<UserApartments_Sum_Fields>;
  var_pop?: Maybe<UserApartments_Var_Pop_Fields>;
  var_samp?: Maybe<UserApartments_Var_Samp_Fields>;
  variance?: Maybe<UserApartments_Variance_Fields>;
};


/** aggregate fields of "UserApartments" */
export type UserApartments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserApartments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "UserApartments" */
export type UserApartments_Aggregate_Order_By = {
  avg?: InputMaybe<UserApartments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserApartments_Max_Order_By>;
  min?: InputMaybe<UserApartments_Min_Order_By>;
  stddev?: InputMaybe<UserApartments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UserApartments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UserApartments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UserApartments_Sum_Order_By>;
  var_pop?: InputMaybe<UserApartments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UserApartments_Var_Samp_Order_By>;
  variance?: InputMaybe<UserApartments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "UserApartments" */
export type UserApartments_Arr_Rel_Insert_Input = {
  data: Array<UserApartments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserApartments_On_Conflict>;
};

/** aggregate avg on columns */
export type UserApartments_Avg_Fields = {
  __typename?: 'UserApartments_avg_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "UserApartments" */
export type UserApartments_Avg_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "UserApartments". All fields are combined with a logical 'AND'. */
export type UserApartments_Bool_Exp = {
  AnnonsId?: InputMaybe<Numeric_Comparison_Exp>;
  Apartment?: InputMaybe<Apartments_Bool_Exp>;
  UserId?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<UserApartments_Bool_Exp>>;
  _not?: InputMaybe<UserApartments_Bool_Exp>;
  _or?: InputMaybe<Array<UserApartments_Bool_Exp>>;
};

/** unique or primary key constraints on table "UserApartments" */
export enum UserApartments_Constraint {
  /** unique or primary key constraint on columns "UserId", "AnnonsId" */
  UserApartmentsPkey = 'UserApartments_pkey'
}

/** input type for incrementing numeric columns in table "UserApartments" */
export type UserApartments_Inc_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "UserApartments" */
export type UserApartments_Insert_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  Apartment?: InputMaybe<Apartments_Obj_Rel_Insert_Input>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type UserApartments_Max_Fields = {
  __typename?: 'UserApartments_max_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "UserApartments" */
export type UserApartments_Max_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserApartments_Min_Fields = {
  __typename?: 'UserApartments_min_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "UserApartments" */
export type UserApartments_Min_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "UserApartments" */
export type UserApartments_Mutation_Response = {
  __typename?: 'UserApartments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserApartments>;
};

/** on_conflict condition type for table "UserApartments" */
export type UserApartments_On_Conflict = {
  constraint: UserApartments_Constraint;
  update_columns?: Array<UserApartments_Update_Column>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};

/** Ordering options when selecting data from "UserApartments". */
export type UserApartments_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  Apartment?: InputMaybe<Apartments_Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: UserApartments */
export type UserApartments_Pk_Columns_Input = {
  AnnonsId: Scalars['numeric']['input'];
  UserId: Scalars['numeric']['input'];
};

/** select columns of table "UserApartments" */
export enum UserApartments_Select_Column {
  /** column name */
  AnnonsId = 'AnnonsId',
  /** column name */
  UserId = 'UserId'
}

/** input type for updating data in table "UserApartments" */
export type UserApartments_Set_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type UserApartments_Stddev_Fields = {
  __typename?: 'UserApartments_stddev_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "UserApartments" */
export type UserApartments_Stddev_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type UserApartments_Stddev_Pop_Fields = {
  __typename?: 'UserApartments_stddev_pop_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "UserApartments" */
export type UserApartments_Stddev_Pop_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type UserApartments_Stddev_Samp_Fields = {
  __typename?: 'UserApartments_stddev_samp_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "UserApartments" */
export type UserApartments_Stddev_Samp_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "UserApartments" */
export type UserApartments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserApartments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserApartments_Stream_Cursor_Value_Input = {
  AnnonsId?: InputMaybe<Scalars['numeric']['input']>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type UserApartments_Sum_Fields = {
  __typename?: 'UserApartments_sum_fields';
  AnnonsId?: Maybe<Scalars['numeric']['output']>;
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "UserApartments" */
export type UserApartments_Sum_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** update columns of table "UserApartments" */
export enum UserApartments_Update_Column {
  /** column name */
  AnnonsId = 'AnnonsId',
  /** column name */
  UserId = 'UserId'
}

export type UserApartments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserApartments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserApartments_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserApartments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type UserApartments_Var_Pop_Fields = {
  __typename?: 'UserApartments_var_pop_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "UserApartments" */
export type UserApartments_Var_Pop_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type UserApartments_Var_Samp_Fields = {
  __typename?: 'UserApartments_var_samp_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "UserApartments" */
export type UserApartments_Var_Samp_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type UserApartments_Variance_Fields = {
  __typename?: 'UserApartments_variance_fields';
  AnnonsId?: Maybe<Scalars['Float']['output']>;
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "UserApartments" */
export type UserApartments_Variance_Order_By = {
  AnnonsId?: InputMaybe<Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Users" */
export type Users = {
  __typename?: 'Users';
  Email: Scalars['String']['output'];
  /** An array relationship */
  UserApartments: Array<UserApartments>;
  /** An aggregate relationship */
  UserApartments_aggregate: UserApartments_Aggregate;
  UserId: Scalars['numeric']['output'];
};


/** columns and relationships of "Users" */
export type UsersUserApartmentsArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


/** columns and relationships of "Users" */
export type UsersUserApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};

/** aggregated selection of "Users" */
export type Users_Aggregate = {
  __typename?: 'Users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "Users" */
export type Users_Aggregate_Fields = {
  __typename?: 'Users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "Users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'Users_avg_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  Email?: InputMaybe<String_Comparison_Exp>;
  UserApartments?: InputMaybe<UserApartments_Bool_Exp>;
  UserApartments_aggregate?: InputMaybe<UserApartments_Aggregate_Bool_Exp>;
  UserId?: InputMaybe<Numeric_Comparison_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
};

/** unique or primary key constraints on table "Users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "Email" */
  UsersEmailKey = 'Users_Email_key',
  /** unique or primary key constraint on columns "UserId" */
  UsersPkey = 'Users_pkey'
}

/** input type for incrementing numeric columns in table "Users" */
export type Users_Inc_Input = {
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "Users" */
export type Users_Insert_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  UserApartments?: InputMaybe<UserApartments_Arr_Rel_Insert_Input>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'Users_max_fields';
  Email?: Maybe<Scalars['String']['output']>;
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'Users_min_fields';
  Email?: Maybe<Scalars['String']['output']>;
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "Users" */
export type Users_Mutation_Response = {
  __typename?: 'Users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "Users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "Users". */
export type Users_Order_By = {
  Email?: InputMaybe<Order_By>;
  UserApartments_aggregate?: InputMaybe<UserApartments_Aggregate_Order_By>;
  UserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Users */
export type Users_Pk_Columns_Input = {
  UserId: Scalars['numeric']['input'];
};

/** select columns of table "Users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  UserId = 'UserId'
}

/** input type for updating data in table "Users" */
export type Users_Set_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'Users_stddev_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'Users_stddev_pop_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'Users_stddev_samp_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  Email?: InputMaybe<Scalars['String']['input']>;
  UserId?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'Users_sum_fields';
  UserId?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "Users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  UserId = 'UserId'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'Users_var_pop_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'Users_var_samp_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'Users_variance_fields';
  UserId?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ApartmentTypes" */
  delete_ApartmentTypes?: Maybe<ApartmentTypes_Mutation_Response>;
  /** delete single row from the table: "ApartmentTypes" */
  delete_ApartmentTypes_by_pk?: Maybe<ApartmentTypes>;
  /** delete data from the table: "Apartments" */
  delete_Apartments?: Maybe<Apartments_Mutation_Response>;
  /** delete single row from the table: "Apartments" */
  delete_Apartments_by_pk?: Maybe<Apartments>;
  /** delete data from the table: "Districts" */
  delete_Districts?: Maybe<Districts_Mutation_Response>;
  /** delete single row from the table: "Districts" */
  delete_Districts_by_pk?: Maybe<Districts>;
  /** delete data from the table: "Municipalities" */
  delete_Municipalities?: Maybe<Municipalities_Mutation_Response>;
  /** delete single row from the table: "Municipalities" */
  delete_Municipalities_by_pk?: Maybe<Municipalities>;
  /** delete data from the table: "UserApartments" */
  delete_UserApartments?: Maybe<UserApartments_Mutation_Response>;
  /** delete single row from the table: "UserApartments" */
  delete_UserApartments_by_pk?: Maybe<UserApartments>;
  /** delete data from the table: "Users" */
  delete_Users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "Users" */
  delete_Users_by_pk?: Maybe<Users>;
  /** insert data into the table: "ApartmentTypes" */
  insert_ApartmentTypes?: Maybe<ApartmentTypes_Mutation_Response>;
  /** insert a single row into the table: "ApartmentTypes" */
  insert_ApartmentTypes_one?: Maybe<ApartmentTypes>;
  /** insert data into the table: "Apartments" */
  insert_Apartments?: Maybe<Apartments_Mutation_Response>;
  /** insert a single row into the table: "Apartments" */
  insert_Apartments_one?: Maybe<Apartments>;
  /** insert data into the table: "Districts" */
  insert_Districts?: Maybe<Districts_Mutation_Response>;
  /** insert a single row into the table: "Districts" */
  insert_Districts_one?: Maybe<Districts>;
  /** insert data into the table: "Municipalities" */
  insert_Municipalities?: Maybe<Municipalities_Mutation_Response>;
  /** insert a single row into the table: "Municipalities" */
  insert_Municipalities_one?: Maybe<Municipalities>;
  /** insert data into the table: "UserApartments" */
  insert_UserApartments?: Maybe<UserApartments_Mutation_Response>;
  /** insert a single row into the table: "UserApartments" */
  insert_UserApartments_one?: Maybe<UserApartments>;
  /** insert data into the table: "Users" */
  insert_Users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "Users" */
  insert_Users_one?: Maybe<Users>;
  /** update data of the table: "ApartmentTypes" */
  update_ApartmentTypes?: Maybe<ApartmentTypes_Mutation_Response>;
  /** update single row of the table: "ApartmentTypes" */
  update_ApartmentTypes_by_pk?: Maybe<ApartmentTypes>;
  /** update multiples rows of table: "ApartmentTypes" */
  update_ApartmentTypes_many?: Maybe<Array<Maybe<ApartmentTypes_Mutation_Response>>>;
  /** update data of the table: "Apartments" */
  update_Apartments?: Maybe<Apartments_Mutation_Response>;
  /** update single row of the table: "Apartments" */
  update_Apartments_by_pk?: Maybe<Apartments>;
  /** update multiples rows of table: "Apartments" */
  update_Apartments_many?: Maybe<Array<Maybe<Apartments_Mutation_Response>>>;
  /** update data of the table: "Districts" */
  update_Districts?: Maybe<Districts_Mutation_Response>;
  /** update single row of the table: "Districts" */
  update_Districts_by_pk?: Maybe<Districts>;
  /** update multiples rows of table: "Districts" */
  update_Districts_many?: Maybe<Array<Maybe<Districts_Mutation_Response>>>;
  /** update data of the table: "Municipalities" */
  update_Municipalities?: Maybe<Municipalities_Mutation_Response>;
  /** update single row of the table: "Municipalities" */
  update_Municipalities_by_pk?: Maybe<Municipalities>;
  /** update multiples rows of table: "Municipalities" */
  update_Municipalities_many?: Maybe<Array<Maybe<Municipalities_Mutation_Response>>>;
  /** update data of the table: "UserApartments" */
  update_UserApartments?: Maybe<UserApartments_Mutation_Response>;
  /** update single row of the table: "UserApartments" */
  update_UserApartments_by_pk?: Maybe<UserApartments>;
  /** update multiples rows of table: "UserApartments" */
  update_UserApartments_many?: Maybe<Array<Maybe<UserApartments_Mutation_Response>>>;
  /** update data of the table: "Users" */
  update_Users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "Users" */
  update_Users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "Users" */
  update_Users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ApartmentTypesArgs = {
  where: ApartmentTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ApartmentTypes_By_PkArgs = {
  Lagenhetstyp: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ApartmentsArgs = {
  where: Apartments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Apartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DistrictsArgs = {
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Districts_By_PkArgs = {
  Kommun: Scalars['String']['input'];
  Stadsdel: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MunicipalitiesArgs = {
  where: Municipalities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Municipalities_By_PkArgs = {
  Kommun: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserApartmentsArgs = {
  where: UserApartments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserApartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
  UserId: Scalars['numeric']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  UserId: Scalars['numeric']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ApartmentTypesArgs = {
  objects: Array<ApartmentTypes_Insert_Input>;
  on_conflict?: InputMaybe<ApartmentTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ApartmentTypes_OneArgs = {
  object: ApartmentTypes_Insert_Input;
  on_conflict?: InputMaybe<ApartmentTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ApartmentsArgs = {
  objects: Array<Apartments_Insert_Input>;
  on_conflict?: InputMaybe<Apartments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Apartments_OneArgs = {
  object: Apartments_Insert_Input;
  on_conflict?: InputMaybe<Apartments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistrictsArgs = {
  objects: Array<Districts_Insert_Input>;
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Districts_OneArgs = {
  object: Districts_Insert_Input;
  on_conflict?: InputMaybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MunicipalitiesArgs = {
  objects: Array<Municipalities_Insert_Input>;
  on_conflict?: InputMaybe<Municipalities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Municipalities_OneArgs = {
  object: Municipalities_Insert_Input;
  on_conflict?: InputMaybe<Municipalities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserApartmentsArgs = {
  objects: Array<UserApartments_Insert_Input>;
  on_conflict?: InputMaybe<UserApartments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserApartments_OneArgs = {
  object: UserApartments_Insert_Input;
  on_conflict?: InputMaybe<UserApartments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ApartmentTypesArgs = {
  _set?: InputMaybe<ApartmentTypes_Set_Input>;
  where: ApartmentTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ApartmentTypes_By_PkArgs = {
  _set?: InputMaybe<ApartmentTypes_Set_Input>;
  pk_columns: ApartmentTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ApartmentTypes_ManyArgs = {
  updates: Array<ApartmentTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ApartmentsArgs = {
  _inc?: InputMaybe<Apartments_Inc_Input>;
  _set?: InputMaybe<Apartments_Set_Input>;
  where: Apartments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Apartments_By_PkArgs = {
  _inc?: InputMaybe<Apartments_Inc_Input>;
  _set?: InputMaybe<Apartments_Set_Input>;
  pk_columns: Apartments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Apartments_ManyArgs = {
  updates: Array<Apartments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DistrictsArgs = {
  _set?: InputMaybe<Districts_Set_Input>;
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Districts_By_PkArgs = {
  _set?: InputMaybe<Districts_Set_Input>;
  pk_columns: Districts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Districts_ManyArgs = {
  updates: Array<Districts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MunicipalitiesArgs = {
  _set?: InputMaybe<Municipalities_Set_Input>;
  where: Municipalities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Municipalities_By_PkArgs = {
  _set?: InputMaybe<Municipalities_Set_Input>;
  pk_columns: Municipalities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Municipalities_ManyArgs = {
  updates: Array<Municipalities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserApartmentsArgs = {
  _inc?: InputMaybe<UserApartments_Inc_Input>;
  _set?: InputMaybe<UserApartments_Set_Input>;
  where: UserApartments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserApartments_By_PkArgs = {
  _inc?: InputMaybe<UserApartments_Inc_Input>;
  _set?: InputMaybe<UserApartments_Set_Input>;
  pk_columns: UserApartments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserApartments_ManyArgs = {
  updates: Array<UserApartments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ApartmentTypes" */
  ApartmentTypes: Array<ApartmentTypes>;
  /** fetch aggregated fields from the table: "ApartmentTypes" */
  ApartmentTypes_aggregate: ApartmentTypes_Aggregate;
  /** fetch data from the table: "ApartmentTypes" using primary key columns */
  ApartmentTypes_by_pk?: Maybe<ApartmentTypes>;
  /** fetch data from the table: "Apartments" */
  Apartments: Array<Apartments>;
  /** fetch aggregated fields from the table: "Apartments" */
  Apartments_aggregate: Apartments_Aggregate;
  /** fetch data from the table: "Apartments" using primary key columns */
  Apartments_by_pk?: Maybe<Apartments>;
  /** fetch data from the table: "Districts" */
  Districts: Array<Districts>;
  /** fetch aggregated fields from the table: "Districts" */
  Districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "Districts" using primary key columns */
  Districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "Municipalities" */
  Municipalities: Array<Municipalities>;
  /** fetch aggregated fields from the table: "Municipalities" */
  Municipalities_aggregate: Municipalities_Aggregate;
  /** fetch data from the table: "Municipalities" using primary key columns */
  Municipalities_by_pk?: Maybe<Municipalities>;
  /** An array relationship */
  UserApartments: Array<UserApartments>;
  /** An aggregate relationship */
  UserApartments_aggregate: UserApartments_Aggregate;
  /** fetch data from the table: "UserApartments" using primary key columns */
  UserApartments_by_pk?: Maybe<UserApartments>;
  /** fetch data from the table: "Users" */
  Users: Array<Users>;
  /** fetch aggregated fields from the table: "Users" */
  Users_aggregate: Users_Aggregate;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
};


export type Query_RootApartmentTypesArgs = {
  distinct_on?: InputMaybe<Array<ApartmentTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApartmentTypes_Order_By>>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};


export type Query_RootApartmentTypes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ApartmentTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApartmentTypes_Order_By>>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};


export type Query_RootApartmentTypes_By_PkArgs = {
  Lagenhetstyp: Scalars['String']['input'];
};


export type Query_RootApartmentsArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


export type Query_RootApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


export type Query_RootApartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
};


export type Query_RootDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Query_RootDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Query_RootDistricts_By_PkArgs = {
  Kommun: Scalars['String']['input'];
  Stadsdel: Scalars['String']['input'];
};


export type Query_RootMunicipalitiesArgs = {
  distinct_on?: InputMaybe<Array<Municipalities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Municipalities_Order_By>>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};


export type Query_RootMunicipalities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Municipalities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Municipalities_Order_By>>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};


export type Query_RootMunicipalities_By_PkArgs = {
  Kommun: Scalars['String']['input'];
};


export type Query_RootUserApartmentsArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


export type Query_RootUserApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


export type Query_RootUserApartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
  UserId: Scalars['numeric']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  UserId: Scalars['numeric']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ApartmentTypes" */
  ApartmentTypes: Array<ApartmentTypes>;
  /** fetch aggregated fields from the table: "ApartmentTypes" */
  ApartmentTypes_aggregate: ApartmentTypes_Aggregate;
  /** fetch data from the table: "ApartmentTypes" using primary key columns */
  ApartmentTypes_by_pk?: Maybe<ApartmentTypes>;
  /** fetch data from the table in a streaming manner: "ApartmentTypes" */
  ApartmentTypes_stream: Array<ApartmentTypes>;
  /** fetch data from the table: "Apartments" */
  Apartments: Array<Apartments>;
  /** fetch aggregated fields from the table: "Apartments" */
  Apartments_aggregate: Apartments_Aggregate;
  /** fetch data from the table: "Apartments" using primary key columns */
  Apartments_by_pk?: Maybe<Apartments>;
  /** fetch data from the table in a streaming manner: "Apartments" */
  Apartments_stream: Array<Apartments>;
  /** fetch data from the table: "Districts" */
  Districts: Array<Districts>;
  /** fetch aggregated fields from the table: "Districts" */
  Districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "Districts" using primary key columns */
  Districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table in a streaming manner: "Districts" */
  Districts_stream: Array<Districts>;
  /** fetch data from the table: "Municipalities" */
  Municipalities: Array<Municipalities>;
  /** fetch aggregated fields from the table: "Municipalities" */
  Municipalities_aggregate: Municipalities_Aggregate;
  /** fetch data from the table: "Municipalities" using primary key columns */
  Municipalities_by_pk?: Maybe<Municipalities>;
  /** fetch data from the table in a streaming manner: "Municipalities" */
  Municipalities_stream: Array<Municipalities>;
  /** An array relationship */
  UserApartments: Array<UserApartments>;
  /** An aggregate relationship */
  UserApartments_aggregate: UserApartments_Aggregate;
  /** fetch data from the table: "UserApartments" using primary key columns */
  UserApartments_by_pk?: Maybe<UserApartments>;
  /** fetch data from the table in a streaming manner: "UserApartments" */
  UserApartments_stream: Array<UserApartments>;
  /** fetch data from the table: "Users" */
  Users: Array<Users>;
  /** fetch aggregated fields from the table: "Users" */
  Users_aggregate: Users_Aggregate;
  /** fetch data from the table: "Users" using primary key columns */
  Users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "Users" */
  Users_stream: Array<Users>;
};


export type Subscription_RootApartmentTypesArgs = {
  distinct_on?: InputMaybe<Array<ApartmentTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApartmentTypes_Order_By>>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};


export type Subscription_RootApartmentTypes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ApartmentTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ApartmentTypes_Order_By>>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};


export type Subscription_RootApartmentTypes_By_PkArgs = {
  Lagenhetstyp: Scalars['String']['input'];
};


export type Subscription_RootApartmentTypes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApartmentTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<ApartmentTypes_Bool_Exp>;
};


export type Subscription_RootApartmentsArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


export type Subscription_RootApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Apartments_Order_By>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


export type Subscription_RootApartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
};


export type Subscription_RootApartments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Apartments_Stream_Cursor_Input>>;
  where?: InputMaybe<Apartments_Bool_Exp>;
};


export type Subscription_RootDistrictsArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Subscription_RootDistricts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Districts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Districts_Order_By>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Subscription_RootDistricts_By_PkArgs = {
  Kommun: Scalars['String']['input'];
  Stadsdel: Scalars['String']['input'];
};


export type Subscription_RootDistricts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Districts_Stream_Cursor_Input>>;
  where?: InputMaybe<Districts_Bool_Exp>;
};


export type Subscription_RootMunicipalitiesArgs = {
  distinct_on?: InputMaybe<Array<Municipalities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Municipalities_Order_By>>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};


export type Subscription_RootMunicipalities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Municipalities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Municipalities_Order_By>>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};


export type Subscription_RootMunicipalities_By_PkArgs = {
  Kommun: Scalars['String']['input'];
};


export type Subscription_RootMunicipalities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Municipalities_Stream_Cursor_Input>>;
  where?: InputMaybe<Municipalities_Bool_Exp>;
};


export type Subscription_RootUserApartmentsArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


export type Subscription_RootUserApartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserApartments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserApartments_Order_By>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


export type Subscription_RootUserApartments_By_PkArgs = {
  AnnonsId: Scalars['numeric']['input'];
  UserId: Scalars['numeric']['input'];
};


export type Subscription_RootUserApartments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserApartments_Stream_Cursor_Input>>;
  where?: InputMaybe<UserApartments_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  UserId: Scalars['numeric']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type ApartmentsQueryVariables = Exact<{
  annonseradTill?: InputMaybe<Date_Comparison_Exp>;
  kommun?: InputMaybe<String_Comparison_Exp>;
}>;


export type ApartmentsQuery = { __typename?: 'query_root', Apartments: Array<{ __typename?: 'Apartments', AnnonsId: number, KoordinatLatitud?: number | null, KoordinatLongitud?: number | null, AnnonseradTill?: string | null, Kommun?: string | null, AntalRum?: number | null, Gatuadress?: string | null, Hyra?: number | null, Stadsdel?: string | null, Vaning?: number | null, Yta?: number | null }> };

export type MunicipalitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type MunicipalitiesQuery = { __typename?: 'query_root', Municipalities: Array<{ __typename?: 'Municipalities', Kommun: string }> };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', Users: Array<{ __typename?: 'Users', UserId: number, UserApartments: Array<{ __typename?: 'UserApartments', Apartment?: { __typename?: 'Apartments', AnnonsId: number, AnnonseradFran?: string | null, AnnonseradTill?: string | null, Kommun?: string | null } | null }> }> };


export const ApartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Apartments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annonseradTill"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"date_comparison_exp"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"kommun"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String_comparison_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Apartments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"AnnonseradTill"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annonseradTill"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Kommun"},"value":{"kind":"Variable","name":{"kind":"Name","value":"kommun"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"AnnonseradTill"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnonsId"}},{"kind":"Field","name":{"kind":"Name","value":"KoordinatLatitud"}},{"kind":"Field","name":{"kind":"Name","value":"KoordinatLongitud"}},{"kind":"Field","name":{"kind":"Name","value":"AnnonseradTill"}},{"kind":"Field","name":{"kind":"Name","value":"Kommun"}},{"kind":"Field","name":{"kind":"Name","value":"AntalRum"}},{"kind":"Field","name":{"kind":"Name","value":"Gatuadress"}},{"kind":"Field","name":{"kind":"Name","value":"Hyra"}},{"kind":"Field","name":{"kind":"Name","value":"Stadsdel"}},{"kind":"Field","name":{"kind":"Name","value":"Vaning"}},{"kind":"Field","name":{"kind":"Name","value":"Yta"}}]}}]}}]} as unknown as DocumentNode<ApartmentsQuery, ApartmentsQueryVariables>;
export const MunicipalitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Municipalities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Municipalities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Kommun"}}]}}]}}]} as unknown as DocumentNode<MunicipalitiesQuery, MunicipalitiesQueryVariables>;
export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}},{"kind":"Field","name":{"kind":"Name","value":"UserApartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Apartment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AnnonsId"}},{"kind":"Field","name":{"kind":"Name","value":"AnnonseradFran"}},{"kind":"Field","name":{"kind":"Name","value":"AnnonseradTill"}},{"kind":"Field","name":{"kind":"Name","value":"Kommun"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;