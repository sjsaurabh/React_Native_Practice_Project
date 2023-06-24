import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "../checkBox";
import InputText from "../InputText";
import SuccessPopUp from "../modals/SuccessPopUp";
import CommonContainer from "../CommonContainer";
import Home_icon from "../../assets/SvgComponents/Home_icon";

let screenHeight = Math.round(Dimensions.get("window").height);
let screenWidth = Math.round(Dimensions.get("window").width);

export default function PayNowMoveOut() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const changeId = () => {
    setActive(!active);
  };
  const changeId2 = () => {
    setActive2(!active2);
  };
  const changeId3 = () => {
    setActive3(!active3);
  };
  const [ischecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  const [futureDetails, setFutureDetails] = useState(false);
  const changeFuture = () => {
    setFutureDetails(!futureDetails);
  };
  const navigation = useNavigation();
  const [colors, setColors] = useState(null);
  const [appStyles, setAppStyles] = useState(null);
  const [fontSizes, setFontSizes] = useState(null);
  const [fontFamily, setFontFamily] = useState(null);

  const { theme } = useSelector((state) => state.app);

  useEffect(() => {
    setColors(theme.colors);
    setFontFamily(theme.fontFamily);
    setFontSizes(theme.fontSizes);
    setAppStyles(theme.styles);
  }, [theme]);

  const styles = StyleSheet.create({
    mainContainer: {
      // flex: 1,

      backgroundColor: colors?.BACKGROUND,
      borderTopRightRadius: 22,
      borderTopLeftRadius: 22,
      // marginTop: -20,
      // marginBottom:255
    },
    creditCardContainer: {
      backgroundColor: colors?.PAYMENT_BG_ONE,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 33,
      borderRadius: 8,
      paddingHorizontal: 15.5,
      gap: 15.29,
      marginHorizontal: 20,
      paddingVertical: 15,
    },

    creditCardText: {
      // marginLeft: 15.29,
      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    cardDetailsView: {
      backgroundColor: colors?.PAYMENT_BG_ONE,
        marginTop: 20,
        // backgroundColor: 'red',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius:6
    },
    CardcontainerTwo: {
      flexDirection: "row",
      justifyContent: 'space-between',

      gap: 10,

    },
    
    EnterCreditCardNumber: {
      marginLeft: 18,
      marginTop: 18,
    },
    cheakBoXContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 26,
     
      gap: 5,
      paddingHorizontal: 22
    },
    futurDetails: {
      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    totalamtView: {
      flexDirection: 'row',
      backgroundColor: colors?.PAYMENT_BG_ONE,
      borderRadius: 8,
      marginTop: 22,
      justifyContent: "space-between",
      marginHorizontal: 20,
      paddingHorizontal: 14,
      paddingVertical: 15,
    }
    ,
    totalamtText: {

      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    amdText: {
      // marginRight: 15,
      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    PostDateView:{
      marginTop:20,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      marginHorizontal:20,
      paddingHorizontal:10,
      paddingVertical:10,
      flexDirection:'row',
      gap:10,
      alignItems:'center',
     borderRadius:6
    },
    Helptext:{
      fontSize: fontSizes?.caption,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    }

  });

  return (

    <CommonContainer
      navbar={{
        title: 'Pay Now',
        backButton: true
      }}
    >
    <View style={styles.creditCardContainer}>
    <CheckBox
      active={active}
      onChange={() => changeId()}
      size={25}
    />
    <Text style={styles.creditCardText}>
      Credit Card
    </Text>
  </View>

      {/* <View style={styles.mainContainer}>
    </View>*/}
    <View style={styles.cardDetailsView}>

      <View style={{
        height:90
      }}>
        <InputText 
        topAddonText='Enter Credit Card Number*'
        />
      </View>
      <View style={{
        height:80,
        flexDirection: 'row',
        justifyContent: 'space-between' 
      }}>
        <View style={{
          width: '60%',
          // height:30
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingBottom: 5
          }}>
            <Text>Expiry Date</Text>

          </View>
          <InputText />
        </View>
        <View style={{
          width: '35%',
          // height:30,
          marginLeft:10
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 5
          }}>
            <Text>CVV</Text>
            <Text style={styles.Helptext}>Help?</Text>
          </View>
          <InputText />
        </View>
      </View>
    </View>



      <View style={styles.cheakBoXContainer}>
        <View>
          <CheckBox
            square={true}
            active={futureDetails}
            onChange={() => changeFuture()}
            size={25}
          />
        </View>
        <View>
          <Text style={styles.futurDetails}>Save My Details For Future</Text>
        </View>
      </View>

      <View style={styles.totalamtView}>
        <Text style={styles.totalamtText}>
          Total Amount
        </Text>
        <Text style={styles.amdText}>
          AED 21000
        </Text>
      </View>
      <PrimaryButton
        title="Confirm Payment"
        parentText={{ color: colors?.BUTTON_TEXT }}
        parentStyle={{
          backgroundColor: colors?.DASHBOARD_TEXT_ONE,
          marginHorizontal: 20,
          paddingHorizontal: 14,
          paddingVertical: 11,

          borderRadius: 8,
          marginTop: 20,
        }}
        onPress={() => setModalVisible(true)}
        
      />
      <View>
            <SuccessPopUp
              isVisible={modalVisible}
              closeModal={() => setModalVisible(false)}
              SuccessTitle={"Done"}
              SuccessMessage={"Your payment is completed successfully!"}
              showButton={true}
              onSuccess={() => [setModalVisible(false),navigation.navigate('ClearanceCharge1')]}
            />
          </View>
        <View style={styles.PostDateView}>
        <CheckBox
      active={active2}
      onChange={() => changeId2()}
      size={25}
    />
    <Text style={styles.creditCardText}>
    Post Dated Cheques (5% Off)
    </Text>
        </View>
        <View style={styles.PostDateView}>
        <CheckBox
      active={active3}
      onChange={() => changeId3()}
      size={25}
    />
    <Text style={styles.creditCardText}>
    Bank Transfer
    </Text>
        </View>




    </CommonContainer>

  );
}
