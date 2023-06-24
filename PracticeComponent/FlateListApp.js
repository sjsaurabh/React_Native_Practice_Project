import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlateListApp() {
    const name=[
        {
            names:'vinod',
            image_url:'https://imgd.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-15.jpeg?isig=0&q=75'
        },
        {
            names:'maggi',
            image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmZ4cydQ_CCIu0JZOc-tAWHuskYYFzOCADRLmhbABkQ&usqp=CAU&ec=48665699"
        },
        {
            names:'Gokul',
            image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxxFehVFlUpd4UcXqKwBLdcuDrsN9QBrXFd6TZa_9Gg&usqp=CAU&ec=48665699"
        },
        {
            names:'evander',
        },
        {
            names:'Aftab',
        },
        {
            names:'Justin',
        },
        {
            names:'edvin',
        },
        {
            names:'Divyanshu',
        },
    ]
  return (
    <View style={{marginTop:100}}>
      <Text>FlateListApp</Text>
      <FlatList
      data={name}
      renderItem={({item})=>{
        return(
            <View>
            <Text>{item.names}</Text>
            <Image 
            style={{width:100,height:100}} source={{uri:item.image_url}}/>
            </View>
        )
      }}
      />
    </View>
  )
}

// const styles = StyleSheet.create({
//     export default function App() {
//         const [images, setimages] = useState([
//           {src:require('./assets/image1.png'),key:'1'},
//           {src:require('./assets/image2.png'),key:'2'},
//           {src:require('./assets/image3.png'),key:'3'},
//           {src:require('./assets/image4.png'),key:'4'},
//           {src:require('./assets/image5.png'),key:'5'}
//         ]);
//       And here is the FlatList:
      
//       <FlatList
//         horizontal={true} 
//         showsHorizontalScrollIndicator={false} 
//         data={images}
//         renderItem={ ({images}) => (
//           <Image source={images.src} style={{
//             width:260,
//             height:300,
//             borderWidth:2,
//             borderColor:'#d35647',
//             resizeMode:'contain',
//             margin:8
//           }}></Image>
//         )}
//       />
// })
