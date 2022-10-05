/**
 *
 * @format
 *
 */

export type DocumentTypeComponentSearchBarPropsType = {
  searchValue: string,
  onChangeSearchValue: (value: string) => void,
  onClearSearchValue: () => void,
  onSubmitSearchValue: (value: string) => void,
};

export type DocumentTypeComponentDocumentItemPropsType = {
  id: number,
  type: string,
  code: string,
  createdDate: string,
  status: string,
};

export type PropsType = {
  searchBarProps: DocumentTypeComponentSearchBarPropsType,
  documentListProps: Array<DocumentTypeComponentDocumentItemPropsType>,
};

export type DocumentTypeComponentStylesType = {

}
