import { StyleSheet } from "react-native";
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";


const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#001F3F',
        },
        topContainer:
        {
            marginTop: 100,
            alignItems: 'center'

        },
        anyContainer:
        {
            flex: 2,
            alignItems: 'center',
            marginTop: 150,
            

        },
        sepContainer:
        {
            flex: 2,
            alignItems: 'center'

        },
        title:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h1 *1.5,
            fontWeight: 'bold',
        },
        subTitle:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h4,
            paddingTop: 6
        },
        dataContainer:
        {
            marginTop: 80,
        },
        textinput:
        {
            flex: 2,
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h3,
            borderBottomColor: COLORFONTS.lightgrey,
            borderBottomWidth: 1,
            paddingVertical: 1,
            marginHorizontal: 100,
            marginVertical: 2,

        },
        buttonContainer:
        {
            marginTop: 50,
            marginVertical: 250
            
        },
        buttonContainer1:
        {
            marginTop: 60
            
        },
        firstButton:
        {
            backgroundColor: '#2E8B57',
            padding: 20,
            marginHorizontal: 70,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 1,
        },
        buttonText:
        {
            marginTop: 10,
            flex: 2,
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: SIZEFONTS.h4,
        },
    }
);

export default styles;