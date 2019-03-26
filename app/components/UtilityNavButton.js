import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Pin extends Component {
  render() {
        switch (this.props.icon) {
            case 'ios-arrow-back':
            return <Icon name="ios-arrow-back" size={30} color="#4F8EF7" />

            case 'ios-paper-plane':
            return <Icon name="ios-paper-plane" size={30} color="#4F8EF7" />

            case 'ios-more':
            return <Icon name="ios-more" size={30} color="#4F8EF7" />

            case 'ios-star':
            return <Icon name="ios-star" size={30} color="#4F8EF7" />

            case 'pin':
            return <IconTwo name="pin" size={30} color="#4F8EF7" />


        }
  }
}

