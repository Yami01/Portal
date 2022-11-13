import React, { useCallback, useMemo, useState } from "react"
import HomeComponent from "@/Containers/Home/Component/HomeComponent"
import { mockSlider } from "@/Containers/Home/Config"
import type { PropsType } from "@/Containers/Home/Types"

const HomeContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeSliderIndex = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const sliderProps = useMemo((): PropsType => {
    return mockSlider;
  }, []);

  return <HomeComponent slider={sliderProps} selectedIndex={selectedIndex} onSelectedIndexChange={onChangeSliderIndex} />
}

export default HomeContainer
