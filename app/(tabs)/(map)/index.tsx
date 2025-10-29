import {StyleSheet, View} from "react-native";
import {ThemedButton, ThemedText, ThemedView, useThemeColor} from "@/components/Themed";
import {Host, Picker, VStack} from "@expo/ui/swift-ui";
import {useState} from "react";
import {ms, ScaledSheet} from "react-native-size-matters";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {ImageBackground} from 'expo-image'

export default function MapScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const pickerWidth = wp('100%') - ms(48);
  const pickerContainerWidth = wp('100%') - ms(24);
  const insets = useSafeAreaInsets();
  const insetsBottom = insets.bottom + ms(60);
  const backgroundColor = useThemeColor({ }, 'background');

  return (
    <ImageBackground
      source={`floor${selectedIndex + 1}`}
      style={styles.container}
    >
      <View style={[{marginBottom: insetsBottom, backgroundColor: backgroundColor, width: pickerContainerWidth}, styles.pickerContainer]}>
        <EventCard
          day={"Thursday"}
          time={"10:00 - 14:00"}
          location={"Oslo Campus"}
          title={"Coffee hour at Oslo Campus"}
          description={"Join us for a coffee hour at Oslo Campus"}
          imageUrl={"https://picsum.photos/200/300"}
        />
        <ThemedText>Select a floor</ThemedText>
        <Host matchContents>
          <Picker
            frame={{
              width: pickerWidth
            }}
            options={["1st", "2nd", "3d", "4th", "5th", "6th"]}
            selectedIndex={selectedIndex}
            onOptionSelected={({ nativeEvent: { index } }) => {
              setSelectedIndex(index);
            }}
            variant="segmented"
          />
        </Host>
      </View>
    </ImageBackground>
  );
}

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {EventCard} from "@/app/(tabs)/(home)";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '24@ms',
    paddingHorizontal: '24@ms',
    position: 'relative',
  },
  pickerContainer: {
    alignSelf: 'center',
    marginTop: 'auto',
    gap: '6@ms',
    padding: '12@ms',
    borderRadius: '4@ms'
  },
  nextEventContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    position: 'absolute',
    top: '12@ms',
    right: '12@ms',
    padding: '12@ms',
    borderRadius: '4@ms',
    gap: '6@ms',
  }
});
