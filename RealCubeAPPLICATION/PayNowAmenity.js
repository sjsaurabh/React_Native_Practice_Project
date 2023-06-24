import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header_Image_background from '../Header_Image_background';
import CheckBox from '../checkBox';
import InputText from '../InputText';
import PrimaryButton from '../buttons/PrimaryButton';
import FabSvg from './FabSvg';
import SuccessPopUp from '../modals/SuccessPopUp';
import CommonContainer from '../CommonContainer';
let screenHeight = Math.round(Dimensions.get('window').height)
let screenWidth = Dimensions.get('window').width
export default function PayNowAmenity() {
  const [credit, setCredit] = useState(false);
  const changeCredit = () => {
    setCredit(!credit);
  };

  const [futureDetails, setFutureDetails] = useState(false);
  const changeFuture = () => {
    setFutureDetails(!futureDetails);
  };

  const [cityBank, setCityBank] = useState(false);
  const changeCityBank = () => {
    setCityBank(!cityBank);
  };
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [colors, setColors] = useState(null);
  const [appStyles, setAppStyles] = useState(null);
  const [fontSizes, setFontSizes] = useState(null);
  const [fontFamily, setFontFamily] = useState(null);

  const { theme } = useSelector((state) => state.app);

  useEffect(() => {
    setColors(theme.colors);
    setFontFamily(theme.fontFamily);
    setFontSizes(theme.fontSizes);
    setAppStyles(theme.styles); // console.log("myFinanceTheme====", theme)
  }, [theme]);
  const styles = StyleSheet.create({
    maineContainer: {
      width: screenWidth,
      height: screenHeight + 100,
      backgroundColor: colors?.BACKGROUND,
      borderTopRightRadius: 22,
      borderTopLeftRadius: 22,
      marginTop:22
    },
    CreditCardView: {
      width: screenWidth - 40,
      height: screenHeight / 13.36,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      alignSelf: 'center',
      marginTop: 33,
      borderRadius: 6,


    },
    CheackBox: {

      marginTop: 14,
      marginLeft: 20,
      flexDirection: "row",
      alignItems: 'center',
    },
    CreditCardText: {
      marginLeft: 10,
      color: colors?.PAYMENT_TEXT,
      fontWeight: '400',
      fontSize: fontSizes?.subTitle
    },
    cardDetailsView: {
      width: screenWidth - 40,
      height: screenHeight / 3.80,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      alignSelf: 'center',
      borderRadius: 6,
      marginTop: 23,
      padding: 20
    },
    CardcontainerTwo: {
      flexDirection: "row",
      justifyContent:'space-between',
      
      gap:10
    },
    totalamtView: {
      flexDirection: 'row',
      width: screenWidth - 42,
      height: screenHeight / 18,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      alignSelf: "center",
      borderRadius: 8,
      alignItems: "center",
      marginTop: 22,
      justifyContent: "space-between"

    }
    ,
    totalamtText: {
      marginLeft: 18,
      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    amdText: {
      marginRight: 15,
      fontSize: fontSizes?.body,
      fontFamily: fontFamily?.FONT_FAMILY,
      fontWeight: '400',
      color: colors?.DASHBOARD_TEXT_ONE
    },
    CreditCardView: {
      width: screenWidth - 40,
      height: screenHeight / 13.36,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      alignSelf: 'center',
      marginTop: 33,
      borderRadius: 6,


    },
    CityBankCardView: {
      width: screenWidth - 40,
      height: screenHeight / 7.1,
      backgroundColor: colors?.PAYMENT_BG_ONE,
      alignSelf: 'center',
      marginTop: 33,
      borderRadius: 6,


    },
    CitybankCardText: {

      color: colors?.PAYMENT_TEXT,
      fontWeight: '400',
      fontSize: fontSizes?.subTitle
    },
    cityBankPadding: {
      marginTop: 3
    },
    futureDetailsView: {
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 20,
      alignItems: 'center'
    },
    futureDetailsText: {
      marginLeft: 5,
      color: colors?.PAYMENT_TEXT,
      fontSize: fontSizes?.body,
      fontWeight: '400'
    },
    numberText: {
      color: colors?.PAYMENT_TEXT,
      fontSize: fontSizes?.body,
      fontWeight: '400'
    },
    CVVText: {
      color: colors?.PAYMENT_CVV,
      fontSize: fontSizes?.body2,
      fontWeight: '400'
    },
    QuestionMark: {
      color: colors?.PAYMENT_TITLE_TEXT,
      fontSize: fontSizes?.body2,
      fontWeight: '400'
    }

  })
  return (
    <View style={{ width: screenWidth, height: screenHeight }}>
    <CommonContainer
    navbar={{
      title: 'PayNow',
      backButton: true,
      
    }}
    scrollEnabled
  >
      <View style={styles.maineContainer}>
        <View style={styles.CreditCardView}>
          <View style={styles.CheackBox}>
            <CheckBox
              active={credit}
              onChange={() => changeCredit()}
              size={25}
            />
            <Text style={styles.CreditCardText}>
              Credit Card
            </Text>
          </View>
        </View>

        <View style={styles.cardDetailsView}>
          <InputText
            topAddonText='Enter Credit Card Number'
            placeholder="enter"
            textFieldStyle={{
              height: 45,
              width: "100%",
              borderWidth: 1,
              
              backgroundColor: colors?.BACKGROUND,
              borderRadius: 8,
              borderColor: colors?.CREDIT_CARD,
            }}
           
          />
          <View style={styles.CardcontainerTwo}>
       
          
            <InputText
              topAddonText='Expiry Date'
              placeholder="MM/YY"

              textFieldStyle={{
                height: 45,
                borderWidth: 1,
                backgroundColor: colors?.BACKGROUND,
                borderRadius: 8,
                borderColor: colors?.CREDIT_CARD,
                
              }}
            />
           
            
              <InputText
              topAddonText='CVV'
              rightAddonText='Help?'
                textFieldStyle={{
                  height: 45,
                  borderWidth: 1,
                  backgroundColor: colors?.BACKGROUND,
                  borderRadius: 8,
                  borderColor: colors?.CREDIT_CARD,
                }}
              />
           


          </View>
        </View>
        <View style={styles.futureDetailsView}>
          <CheckBox
            square={true}
            active={futureDetails}
            onChange={() => changeFuture()}
            size={25}
          />
          <Text style={styles.futureDetailsText}>
            Save My Details For Future
          </Text>
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
            width: screenWidth - 45,
            height: screenHeight / 14.19,
            alignSelf: "center",
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
              onSuccess={() => setModalVisible(false)}
            />
          </View>
      

        <View style={styles.CityBankCardView}>
          <View style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            marginTop: 13,
            marginHorizontal: 15

          }}>
            <View style={{
              flexDirection: "row",
              justifyContent: 'center',
            }}>
              <View style={{ marginTop: 5 }}>
                <CheckBox
                  square={false}
                  active={cityBank}
                  onChange={() => changeCityBank()}
                  size={25}
                />
              </View>
              <View style={{
                marginLeft: 10
              }}>
                <Text style={[styles.CitybankCardText, styles.cityBankPadding]}>
                  Citybank Card
                </Text>
                <Text style={[styles.numberText, styles.cityBankPadding]}>**** **** **** 8787</Text>
                <View style={[{
                  width: screenWidth - 294,
                  flexDirection: "row",
                  justifyContent: 'space-between'
                }, styles.cityBankPadding]}>
                  <Text style={styles.CVVText}>CVV</Text>
                  <Text style={styles.QuestionMark}>?</Text>
                </View>
                <View style={[{
                  width: screenWidth - 294,
                  borderWidth: .5, marginTop: 3
                }, styles.cityBankPadding]}></View>
              </View>
            </View>
            <View><FabSvg /></View>
          </View>
        </View>




      </View>
      </CommonContainer>
    </View>
  )
}

