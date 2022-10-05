import type {AbstractComponent, Node} from "react";
import React, {memo, useMemo} from 'react'
import {Text, View,} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useTheme} from '@/Hooks'
import Header from "@/Components/Header";
import ScreenLayout from "@/Components/ScreenLayout";
import ScreenContainer from "@/Components/ScreenContainer";
import HomeComponentStyles from "@/Containers/Home/Styles";
import {Button, Carousel} from "@ant-design/react-native";
import type {HomeComponentSliderItemPropsType, PropsType} from "@/Containers/Home/Types";
import {navigate} from "@/Navigators/utils";
import {Colors} from "@/Theme/Variables";

const HomeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
	const {slider, onSelectedIndexChange, selectedIndex} = props;
	const {t} = useTranslation()
	const {Common, Fonts, Gutters, Layout} = useTheme()
	let carouselRef = null | Carousel;
	// const dispatch = useDispatch()
	//
	// const [userId, setUserId] = useState('9')
	// const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
	//   useLazyFetchOneQuery()
	//
	// useEffect(() => {
	//   fetchOne(userId)
	// }, [fetchOne, userId])
	//
	// const onChangeTheme = ({ theme, darkMode }) => {
	//   dispatch(changeTheme({ theme, darkMode }))
	// }

	const sliderNode = useMemo((): Node => {
		return (
			<Carousel
				style={HomeComponentStyles.wrapper}
				selectedIndex={selectedIndex}
				autoplay
				infinite
				afterChange={onSelectedIndexChange}
				ref={(ref) => (carouselRef = ref)}>
        {slider && slider.map((sliderItem: HomeComponentSliderItemPropsType, index: number) => {
          return (
            <View
              key={`${index} ${sliderItem.name}`}
              style={[HomeComponentStyles.containerHorizontal, {backgroundColor: sliderItem.color}]}>
              <Text>{sliderItem.name}</Text>
            </View>
          );
        })}
			</Carousel>
		);
	}, [slider])

	return (
		<ScreenContainer>
			<ScreenLayout contentContainerStyle={Layout.justifyContentCenter} neverForceInset={true} header={<Header headerColor={Colors.primary} title={'Home'}/>}>
        {sliderNode}
				<Button type={'primary'} onPress={() => navigate('DocumentType')}>
					Login
				</Button>
				{/*<View style={[[Layout.colCenter, Gutters.smallHPadding]]}>*/}
				{/*  <Brand />*/}
				{/*  {(isLoading || isFetching) && <ActivityIndicator />}*/}
				{/*  {!isSuccess ? (*/}
				{/*    <Text style={Fonts.textRegular}>{error}</Text>*/}
				{/*  ) : (*/}
				{/*    <Text style={Fonts.textRegular}>*/}
				{/*      {t('example.helloUser', { name: data?.name })}*/}
				{/*    </Text>*/}
				{/*  )}*/}
				{/*</View>*/}
				{/*<View*/}
				{/*  style={[*/}
				{/*    Layout.row,*/}
				{/*    Layout.rowHCenter,*/}
				{/*    Gutters.smallHPadding,*/}
				{/*    Gutters.largeVMargin,*/}
				{/*    Common.backgroundPrimary,*/}
				{/*  ]}*/}
				{/*>*/}
				{/*  <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>*/}
				{/*    {t('example.labels.userId')}*/}
				{/*  </Text>*/}
				{/*  <TextInput*/}
				{/*    onChangeText={setUserId}*/}
				{/*    editable={!isLoading}*/}
				{/*    keyboardType={'number-pad'}*/}
				{/*    maxLength={1}*/}
				{/*    value={userId}*/}
				{/*    selectTextOnFocus*/}
				{/*    style={[Layout.fill, Common.textInput]}*/}
				{/*  />*/}
				{/*</View>*/}
				{/*<Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>*/}
				{/*<TouchableOpacity*/}
				{/*  style={[Common.button.rounded, Gutters.regularBMargin]}*/}
				{/*  onPress={() => onChangeTheme({ darkMode: null })}*/}
				{/*>*/}
				{/*  <Text style={Fonts.textRegular}>Auto</Text>*/}
				{/*</TouchableOpacity>*/}

				{/*<TouchableOpacity*/}
				{/*  style={[Common.button.outlineRounded, Gutters.regularBMargin]}*/}
				{/*  onPress={() => onChangeTheme({ darkMode: true })}*/}
				{/*>*/}
				{/*  <Text style={Fonts.textRegular}>Dark</Text>*/}
				{/*</TouchableOpacity>*/}

				{/*<TouchableOpacity*/}
				{/*  style={[Common.button.outline, Gutters.regularBMargin]}*/}
				{/*  onPress={() => onChangeTheme({ darkMode: false })}*/}
				{/*>*/}
				{/*  <Text style={Fonts.textRegular}>Light</Text>*/}
				{/*</TouchableOpacity>*/}
			</ScreenLayout>
		</ScreenContainer>
	)
});

export default HomeComponent
