import React, {useCallback, useMemo, useState} from 'react'
import DocumentTypeComponent from "@/Containers/DocumentType/Component/DocumentTypeComponent";
import type {
  DocumentTypeComponentDocumentItemPropsType,
  DocumentTypeComponentSearchBarPropsType
} from "@/Containers/DocumentType/Types";
import {mockDocumentList} from "@/Containers/DocumentType/Config";

const DocumentTypeContainer = () => {
  const [defaultSearchValue, setDefaultSearchValue] = useState('');

  const onClearSearchValue = useCallback(() => {
    setDefaultSearchValue('');
  }, []);

  const onSubmitSearchValue = useCallback((value: string) => {
    console.log(value);
  }, []);

  const onChangeSearchValue = useCallback((value: string) => {
    setDefaultSearchValue(value);
  }, []);

  const searchBarProps = useMemo((): DocumentTypeComponentSearchBarPropsType => {
    return {
      searchValue: defaultSearchValue,
      onChangeSearchValue: onChangeSearchValue,
      onClearSearchValue: onClearSearchValue,
      onSubmitSearchValue: onSubmitSearchValue
    };
  }, [defaultSearchValue, onClearSearchValue, onSubmitSearchValue, onChangeSearchValue]);

  const documentListProps = useMemo((): Array<DocumentTypeComponentDocumentItemPropsType> => {
    return mockDocumentList;
  }, []);

  return <DocumentTypeComponent searchBarProps={searchBarProps} documentListProps={documentListProps} />
}

export default DocumentTypeContainer
