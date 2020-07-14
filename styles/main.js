import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  titleOnBannerContainer: {
    flexDirection: 'row',
    height: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white'
  },
  titleOnBannerTextContainer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center'
  },
  titleOnBannerText: {
    fontSize: 16,
    marginRight: -30
  },
  productContentContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '65%',
    marginVertical: 25
  },
  imageContainer: {
    height: '100%',
    paddingHorizontal: 10
  },
  image: {
    height: '100%',
    borderRadius: 16
  },
  dotContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dot: {
    marginHorizontal: 5,
    borderRadius: 12
  },
  showDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    height: (windowHeight/100)*11 + 45,
    width: '100%',
    backgroundColor: '#5954f6',
    zIndex: -1,
    position: 'absolute'
  },
  viewPager: {
    flex: 1
  },
  productInfoContainer: {
    paddingHorizontal: 32
  },
  productNameText: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingVertical: 3
  },
  productPriceText: {
    color: '#5B62F5',
    fontSize: 19,
    fontWeight: 'bold',
    paddingVertical: 3
  },
  productDescriptionText: {
    fontSize: 15,
    paddingVertical: 16
  },
  downArrow: {
    width: 50,
    height: 50,
    marginRight: 45,
    padding: 13,
    backgroundColor: '#4d49d3',
    borderRadius: 15
  },
  showDetailsTextContainer: {
    paddingLeft: 30
  },
  showDetailsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  detailsContainer: {
    marginTop: -130,
    backgroundColor: '#5954f6',
    zIndex: -2,
    padding: 24 
  },
  detailsTextStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  keyFeaturesContainer: {
    marginTop: windowHeight < 665 ? 95 : -24
  },
  keyFeturesText: {
    paddingTop: 70
  },
  keySlider: {
    width: windowWidth,
    height: 270,
    marginTop: 14,
    marginLeft: -24
  },
  keySliderIndicator: {
    width: windowWidth/2.5,
    height: 190
  },
  keySliderImageContainer: {
    marginHorizontal: 8
  },
  keySliderImage: {
    resizeMode: 'cover',
    width: windowWidth/2.5,
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  keySliderTextContainer: {
    width: windowWidth/2.5,
    height: 65,
    paddingTop: 6,
    backgroundColor: '#6e6bdf',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  keySliderText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 23
  },
  buyButtonContainer: {
    borderRadius: 20, 
    overflow: 'hidden', 
    height: 65
  },
  buyButton: {
    backgroundColor: '#EFA119',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingLeft: 35,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightArrow: {
    width: 50,
    height: 50,
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 15,
    transform: [{rotate: '270deg'}]
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  detailsSpecificationsBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  detailsSpecificationsBlockText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
    marginRight: 4
  },
  detailsBlockLineContainer: {
    width: (windowWidth/100)*55,
    height: 3,
    marginVertical: 2,
    backgroundColor: '#867BDA'
  },
  detailsBlockLine: {
    height: 3,
    backgroundColor: 'white'
  }
});