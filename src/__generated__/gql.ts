/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Apartments($annonseradTill: date_comparison_exp, $kommun: String_comparison_exp) {\n    Apartments(where: {AnnonseradTill: $annonseradTill, Kommun: $kommun}, order_by: {AnnonseradTill: desc}, limit: 10) {\n      AnnonsId\n      KoordinatLatitud\n      KoordinatLongitud\n      AnnonseradTill\n      Kommun\n      AntalRum\n      Gatuadress\n      Hyra\n      Stadsdel\n      Vaning\n      Yta\n    }\n  }\n": types.ApartmentsDocument,
    "\n  query Municipalities {\n    Municipalities {\n      Kommun\n    }\n  }\n": types.MunicipalitiesDocument,
    "\nquery MyQuery {\n  Users {\n    UserId\n    UserApartments {\n      Apartment {\n        AnnonsId\n        AnnonseradFran\n        AnnonseradTill\n        Kommun\n      }\n    }\n  }\n}\n": types.MyQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Apartments($annonseradTill: date_comparison_exp, $kommun: String_comparison_exp) {\n    Apartments(where: {AnnonseradTill: $annonseradTill, Kommun: $kommun}, order_by: {AnnonseradTill: desc}, limit: 10) {\n      AnnonsId\n      KoordinatLatitud\n      KoordinatLongitud\n      AnnonseradTill\n      Kommun\n      AntalRum\n      Gatuadress\n      Hyra\n      Stadsdel\n      Vaning\n      Yta\n    }\n  }\n"): (typeof documents)["\n  query Apartments($annonseradTill: date_comparison_exp, $kommun: String_comparison_exp) {\n    Apartments(where: {AnnonseradTill: $annonseradTill, Kommun: $kommun}, order_by: {AnnonseradTill: desc}, limit: 10) {\n      AnnonsId\n      KoordinatLatitud\n      KoordinatLongitud\n      AnnonseradTill\n      Kommun\n      AntalRum\n      Gatuadress\n      Hyra\n      Stadsdel\n      Vaning\n      Yta\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Municipalities {\n    Municipalities {\n      Kommun\n    }\n  }\n"): (typeof documents)["\n  query Municipalities {\n    Municipalities {\n      Kommun\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery MyQuery {\n  Users {\n    UserId\n    UserApartments {\n      Apartment {\n        AnnonsId\n        AnnonseradFran\n        AnnonseradTill\n        Kommun\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery MyQuery {\n  Users {\n    UserId\n    UserApartments {\n      Apartment {\n        AnnonsId\n        AnnonseradFran\n        AnnonseradTill\n        Kommun\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;