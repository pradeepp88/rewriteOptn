import * as React from 'react';
import { SafeAreaView, View, Image } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from "styled-components";

import { T, H1, H2, Spacer, Button } from "../atoms";

import OPTNWelcome3 from "../assets/images/OPTNWelcome3.png";

const StyledWrapper = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 16px;
`;

type Props = StackNavigationProp & {};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <StyledWrapper>
      <Spacer />
      <H1>OPTN Wallet</H1>
      <Spacer />
      <Image
        source={OPTNWelcome3}
        style={{
          width: 150,
          height: 150
        }}
      />
      <Spacer />
      <View
        style={{
          flex: 1
        }}
      >
        <H2
          style={{
            textAlign: "center"
          }}
        >
          A Fork of Badger Mobile Wallet
        </H2>
        <Spacer small />
        <T center>Bitcoin Cash (BCH) and Simple Token (SLP) wallet </T>
        <Spacer small />
        <Picker style={{ height: 50, width: 150 }}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Spacer small />
      </View>
      

      <View
        style={{
          flex: 1
        }}
      >
        
        <Button
          onPress={() => navigation.navigate("CreateWalletScreen")}
          text="New Wallet"
        />
        <Spacer small />
        <Button
          onPress={() => navigation.navigate("RestoreWalletScreen")}
          text="Restore Wallet"
        />
      </View>
    </StyledWrapper>
  );
};

export default WelcomeScreen;
