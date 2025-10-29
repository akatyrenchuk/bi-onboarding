import {ScrollView, StyleSheet, View} from "react-native";
import {ThemedText, ThemedView, useThemeColor} from "@/components/Themed";
import {ms, ScaledSheet} from "react-native-size-matters";
import {Image} from "expo-image";
import QRCodeStyled from "react-native-qrcode-styled";
import {interestsList} from "@/dummy-data/interests";

export default function ProfileScreen() {
  const backgroundColor = useThemeColor({ }, 'background');

  return (
    <View style={{
      flex: 1,
      paddingTop: ms(24),
      backgroundColor,
      alignItems: 'center',
      gap: ms(24),
    }}>
      <View style={{
        gap: ms(12),
        alignItems: 'center'
      }}>
        <Image
          source={"https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"}
          style={{
            width: ms(150),
            height: ms(150),
            borderRadius: 999,
          }}
          contentFit={"cover"}
        />
        <View style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ThemedText type={"titleLarge"} style={{color: '#222D38'}}>{"Anton Katyrenchuk"}</ThemedText>
          <ThemedText type={"small"} style={{color: '#475E75'}}>{"Student at Campus Oslo"}</ThemedText>
        </View>
      </View>
      <QRCodeStyled
        data={"https://github.com/akatyrenchuk/bi-onboarding"}
        size={ms(200)}
        style={[
          {
            borderColor: "#222D38"
          }, styles.qrBase
        ]}
        padding={ms(12)}
        pieceBorderRadius={ms(4)}
        isPiecesGlued={true}
        outerEyesOptions={{
          borderRadius: ms(10),
          color: "#002529",
          topLeft: {
            borderRadius: [ms(10), ms(10), 0, ms(10)]
          },
          topRight: {
            borderRadius: [ms(10), ms(10), ms(10)]
          },
          bottomLeft: {
            borderRadius: [ms(10), 0, ms(10), ms(10)]
          }
        }}
        innerEyesOptions={{
          borderRadius: ms(4)
        }}
      />
      <View style={{
        gap: ms(6),
        alignSelf: 'flex-start',
      }}>
        <View style={{
          paddingHorizontal: ms(12),
        }}>
          <ThemedText type={"titleLarge"}>{"Interests"}</ThemedText>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: ms(12),
            paddingHorizontal: ms(12),
          }}
        >
          {interestsList.map((interest, index) => (
            <Image
              key={index}
              source={interest.imageUrl}
              style={{
                width: ms(60),
                height: ms(60),
                borderRadius: 999
              }}
              contentFit={"cover"}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  qrBase: {
    borderWidth: "0.5@ms",
    backgroundColor: "white",
    borderRadius: "30@ms",
    overflow: "hidden",
    alignSelf: "center"
  }
});
