import {Animated, StyleSheet, View} from "react-native";
import {ThemedText, ThemedView, useThemeColor} from "@/components/Themed";
import ScrollView = Animated.ScrollView;
import {ms, ScaledSheet} from "react-native-size-matters";
import {IconSymbol} from "@/components/IconSymbol";
import {Image} from "expo-image";

export default function HomeScreen() {
  const backgroundColor = useThemeColor({ }, 'background');

  return (
    <ScrollView style={{backgroundColor}} contentContainerStyle={[styles.container]}>
      <View style={styles.sectionContainer}>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <ThemedText type={"titleLarge"}>{"Events"}</ThemedText>
          <ThemedText type={"defaultBold"} style={{color: '#0A64FF'}}>{"View all upcoming"}</ThemedText>
        </View>
        <EventCard
          day={"Thursday"}
          time={"10:00 - 14:00"}
          location={"Oslo Campus"}
          title={"Coffee hour at Oslo Campus"}
          description={"Join us for a coffee hour at Oslo Campus"}
          imageUrl={"https://picsum.photos/200/300"}
        />
        <EventCard
          day={"Friday"}
          time={"8:00 - 17:00"}
          location={"Oslo Campus"}
          title={"Meet and greet with the students"}
          description={"Meet your fellow students and have a greet with them. This is a great opportunity to meet new people and have a greet with them."}
          imageUrl={"https://picsum.photos/200/500"}
        />
        <EventCard
          day={"Saturday"}
          time={"14:00 - 16:00"}
          location={"OCHE Carl Berner"}
          title={"MTG Evening"}
          description={"This is a first meeting of the students who play MTG. We will have a meeting to discuss the game and what we have learned so far."}
          imageUrl={"https://picsum.photos/200/100"}
        />
      </View>
      <View style={styles.sectionContainer}>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <ThemedText type={"titleLarge"}>{"Lectures"}</ThemedText>
          <ThemedText type={"defaultBold"} style={{color: '#0A64FF'}}>{"View all upcoming"}</ThemedText>
        </View>
        <LectureCard lecture={"Lecture"} time={"10:00 - 12:00"} location={"Oslo Campus"} title={"Management"} lecturer={"Anton Katyrenchuk"}/>
        <LectureCard lecture={"Lecture"} time={"13:00 - 16:00"} location={"Oslo Campus"} title={"Marketing"} lecturer={"Anton Katyrenchuk"}/>
      </View>
      <View style={styles.sectionContainer}>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <ThemedText type={"titleLarge"}>{"News"}</ThemedText>
          <ThemedText type={"defaultBold"} style={{color: '#0A64FF'}}>{"View all upcoming"}</ThemedText>
        </View>
          <NewsCard title={"New course"} description={"New course is available in Bachelor Administration and Management, you will learn a lot of cool stuff."} imageUrl={"https://picsum.photos/200/300"}/>
          <NewsCard title={"Moose in BI"} description={"A moose was seen in Oslo Campus"} imageUrl={"https://picsum.photos/100/900"}/>
      </View>
    </ScrollView>
  );
}

type EventCardProps = {
  day: string,
  time: string,
  location: string,
  title: string,
  description: string,
  imageUrl: string
}
function EventCard({
  day, time, location, title, description, imageUrl,
}: EventCardProps) {
  return (
    <View style={{
      borderRadius: ms(4),
      borderWidth: 1,
      borderColor: '#D5DDE4'
    }}>
      <View style={{
        backgroundColor: '#E4E8ED',
        padding: ms(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <ThemedText type={'title'}>{day}</ThemedText>
        <View style={{
          gap: ms(6),
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <IconSymbol name={"clock"} color={"black"} size={ms(16)}/>
          <ThemedText type={"smallBold"}>{time}</ThemedText>
        </View>
        <View style={{
          gap: ms(6),
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <IconSymbol name={"mappin"} color={"black"} size={ms(16)}/>
          <ThemedText type={"smallBold"}>{location}</ThemedText>
        </View>
      </View>
      <View style={{
        padding: ms(12),
        flexDirection: 'row',
        gap: 12,
      }}>
        <Image
          style={{
            width: ms(60),
            height: ms(60),
            borderRadius: ms(4)
          }}
          contentFit={"cover"}
          source={imageUrl}
        />
        <View style={{gap: ms(2), flex: 1}}>
          <ThemedText type={"title"}>
            {title}
          </ThemedText>
          <ThemedText>
            {description}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

type LectureCardProps = {
  lecture: string,
  time: string,
  location: string,
  title: string,
  lecturer: string,
}
function LectureCard({
  lecture, time, location, title, lecturer,
}: LectureCardProps) {

  return (
    <View style={{
      borderRadius: ms(4),
      borderWidth: 1,
      borderColor: '#D5DDE4',
      flexDirection: 'row'
    }}>
      <View style={{
        backgroundColor: '#E4E8ED',
        padding: ms(12),
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: ms(24)
      }}>
        <ThemedText type={"title"}>{lecture}</ThemedText>
        <View>
          <View style={{
            gap: ms(6),
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IconSymbol name={"clock"} color={"black"} size={ms(24)}/>
            <ThemedText type={"title"}>{time}</ThemedText>
          </View>
          <View style={{
            gap: ms(6),
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <IconSymbol name={"mappin"} color={"black"} size={ms(16)}/>
            <ThemedText type={"title"}>{location}</ThemedText>
          </View>
        </View>
      </View>
      <View style={{
        padding: ms(12),
        flexDirection: 'column',
        gap: '6@ms'
      }}>
        <ThemedText type={"titleLarge"}>{title}</ThemedText>
        <ThemedText type={"default"}>{lecturer}</ThemedText>
      </View>
    </View>
  );
}

type NewsCardProps = {
  title: string,
  description: string,
  imageUrl: string,
}
function NewsCard({
  title,
  description,
  imageUrl
}: NewsCardProps) {
  return (
    <View style={{
      borderRadius: ms(4),
      borderWidth: 1,
      borderColor: '#D5DDE4',
      flexDirection: 'row',
      overflow: 'hidden',
      justifyContent: 'space-between'
    }}>
      <View style={{
        gap: ms(6),
        padding: ms(12),
        maxWidth: '60%'
      }}>
        <ThemedText type={"title"}>{title}</ThemedText>
        <ThemedText>{description}</ThemedText>
      </View>
      <Image
      style={{
          width: ms(120),
          height: ms(120),
        }}
        contentFit={"cover"}
        source={imageUrl}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    padding: '12@ms',
    gap: '24@ms'
  },
  sectionContainer: {
    gap: '12@ms'
  }
});
