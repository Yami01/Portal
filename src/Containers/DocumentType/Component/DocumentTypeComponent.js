import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'
import Header from "@/Components/Header";
import ScreenLayout from "@/Components/ScreenLayout";
import ScreenContainer from "@/Components/ScreenContainer";
import {Card, Icon, SearchBar, Text, View} from "@ant-design/react-native";
import type {DocumentTypeComponentDocumentItemPropsType, PropsType} from "@/Containers/DocumentType/Types";
import {Colors} from "@/Theme/Variables";
import {TouchableOpacity} from "react-native";

const DocumentTypeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
	const {searchBarProps, documentListProps} = props;
	const {t} = useTranslation()
	const {Common, Fonts, Gutters, Layout} = useTheme()

	const searchBarNode = useMemo((): Node => {
		return (
			<SearchBar
				value={searchBarProps.searchValue}
				placeholder="Search"
				onSubmit={(value: string) => searchBarProps.onSubmitSearchValue(value)}
				onCancel={searchBarProps.onClearSearchValue}
				onChange={searchBarProps.onChangeSearchValue}
				showCancelButton
				cancelText={'Cancel'}
			/>
		);
	}, [searchBarProps])

	const documentListNode = useMemo((): Node => {
		if (!documentListProps) return null;

		return documentListProps.map((documentItem: DocumentTypeComponentDocumentItemPropsType, index: number) => {
			const renderExtraIcon = () => {
				return (
					<TouchableOpacity style={{display: 'flex', alignItems: 'flex-end'}}>
						<Icon name="more" size="sm" color={Colors.black} />
					</TouchableOpacity>
				);
			}
			return (
				<Card style={Gutters.smallBMargin}>
					<Card.Header
						key={`${documentItem.id} ${index}`}
						title={documentItem.type}
						extra={renderExtraIcon()}
					/>
					<Card.Body>
						<View style={{height: 42}}>
							<Text style={{marginLeft: 16}}>{documentItem.type}</Text>
							<Text style={{marginLeft: 16}}>Code: {documentItem.code}</Text>
						</View>
					</Card.Body>
					<Card.Footer
						content={`Created date: ${documentItem.createdDate}`}
						extra={documentItem.status}
					/>
				</Card>
			);
		});
	}, [documentListProps])

	return (
		<ScreenContainer>
			<Header headerColor={Colors.primary} title={'Document Types'}/>
			{searchBarNode}
			<ScreenLayout scrollable neverForceInset={true}>
				{documentListNode}
			</ScreenLayout>
		</ScreenContainer>
	)
});

export default DocumentTypeComponent
