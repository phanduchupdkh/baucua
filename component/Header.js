import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text, Image,
    TouchableOpacity
} from 'react-native'
import fakeLvxoc from '../common/fakeLvxoc';

const {
    imageBau, imageCua, imageTom, imageCa,
    imageNai, imageGa, muoiNgan, haiChuc,
    namChuc, motTram, haiTram, namTram,
    imageBat, imageDia
} = require('./images')

let linVat = [imageBau, imageCua, imageTom, imageCa, imageNai, imageGa]

const Header = () => {
    const [showBat, setshowBat] = useState(true)
    const [taiKhoan, setTaikhoan] = useState(0)
    const [password, setPassword] = useState('')
    const [openCheat, setOpenCheat] = useState(false)
    const [dangDat, setDangDat] = useState({
        'bau': 0,
        'cua': 0,
        'tom': 0,
        'ca': 0,
        'nai': 0,
        'ga': 0
    })
    const [menhGia, setMenhgia] = useState(10)
    const [resultLV, setResultLV] = useState([
        parseInt(Math.random() * 6),
        parseInt(Math.random() * 6),
        parseInt(Math.random() * 6)
    ])
    const pas = 'cuanaicuanaibautomcuanai'
    const _onPressBat = (e) => {
        let x = e.nativeEvent.locationX
        let y = e.nativeEvent.locationY
        // console.log(y)

        let lvXocs = [
            parseInt(Math.random() * 6),
            parseInt(Math.random() * 6),
            parseInt(Math.random() * 6)
        ]
        console.log(password)
        if (password === pas) {
            console.log('ooencheat')
            setOpenCheat(!openCheat)
            setPassword('')
        }
        console.log(openCheat)
        if (openCheat) {
            lvXocs = fakeLvxoc(x, y, lvXocs)
        }
        if (!showBat) {
            setshowBat(!showBat)
            return false
        }
        setshowBat(!showBat)
        let anhXas = ['bau', 'cua', 'tom', 'ca', 'nai', 'ga']

        let nhaCaiThang = dangDat.bau + dangDat.cua + dangDat.tom + dangDat.ca + dangDat.nai + dangDat.ga

        let nhaCaiThua = dangDat[anhXas[lvXocs[0]]] + dangDat[anhXas[lvXocs[1]]] + dangDat[anhXas[lvXocs[2]]]
        setTaikhoan(taiKhoan - nhaCaiThang + 2 * nhaCaiThua)
        setDangDat({
            'bau': 0,
            'cua': 0,
            'tom': 0,
            'ca': 0,
            'nai': 0,
            'ga': 0
        })
        setResultLV(lvXocs)
        setshowBat(!showBat)
    }
    const onDatCuoc = (lv) => {
        let nowPass = password + lv
        nowPass = nowPass.slice(-pas.length)
        setPassword(nowPass)
        console.log(nowPass)
        if (!showBat) return
        dangDat[lv] += menhGia
        setDangDat(JSON.parse(JSON.stringify(dangDat)))
    }
    const changeMenhGia = (mg) => {
        setMenhgia(mg)
    }

    return (
        <>
            <View style={{ marginTop: -20 }}>
                <Text>
                    Số dư: {taiKhoan}k VND
                </Text>
            </View>
            <View style={{
                flex: 1,
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: 50
            }}>
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('bau')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, borderColor: 'green', borderRadius: 25 }}
                        source={imageBau}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.bau ? dangDat.bau + 'k' : ''}</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('cua')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, margin: 3, borderColor: 'green', borderRadius: 25 }}
                        source={imageCua}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.cua ? dangDat.cua + 'k' : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('tom')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, margin: 3, borderColor: 'green', borderRadius: 25 }}
                        source={imageTom}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.tom ? dangDat.tom + 'k' : ''}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 60, justifyContent: 'space-between', flexWrap: 'wrap' }} >
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('ca')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, margin: 3, borderColor: 'green', borderRadius: 25 }}
                        source={imageCa}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.ca ? dangDat.ca + 'k' : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('nai')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, margin: 3, borderColor: 'green', borderRadius: 25 }}
                        source={imageNai}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.nai ? dangDat.nai + 'k' : ''}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 80, borderColor: 'green', alignItems: 'center', borderRadius: 25 }} onPress={() => onDatCuoc('ga')}>
                    <Image
                        style={{ width: 80, height: 80, borderWidth: 1, margin: 3, borderColor: 'green', borderRadius: 25 }}
                        source={imageGa}
                    />
                    <Text style={{ alignItems: 'center' }} >{dangDat.ga ? dangDat.ga + 'k' : ''}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 100, alignItems: 'center' }}
            >
                <TouchableOpacity style={{ width: 300, height: 300, borderColor: 'green', alignItems: 'center', borderRadius: 25 }}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={imageDia}
                    />
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ width: 300, height: 300, borderColor: 'green', alignItems: 'center' }}
                    onPress={(e) => _onPressBat(e)}
                >
                    {showBat ?
                        <Image
                            style={{ width: 300, height: 300, borderRadius: 50 }}
                            source={imageBat}
                        />
                        : <View style={{ marginTop: 50 }}>
                            <Image
                                style={{
                                    width: 80, height: 80, marginLeft: 60, marginBottom: -20,
                                    // transform: [{ rotate: '45deg' }] 
                                }}
                                source={linVat[resultLV[0]]}
                            />
                            <Image
                                style={{ width: 80, height: 80, marginLeft: -30 }}
                                source={linVat[resultLV[1]]}
                            />
                            <Image
                                style={{
                                    width: 80, height: 80, marginLeft: 60, marginTop: -20,
                                    // transform: [{ rotate: '-45deg' }] 
                                }}
                                source={linVat[resultLV[2]]}
                            />
                        </View>
                    }
                </TouchableOpacity>
            </View>
            {/* cac menh gia tien */}
            <View style={{ flex: 1, marginTop: 300, justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }} >
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(10)}>
                    <Image
                        style={{ width: 100, height: 40, borderWidth: 3, margin: 3, borderColor: menhGia === 10 ? 'red' : 'white' }}
                        source={muoiNgan}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(20)}>
                    <Image
                        style={{
                            width: 100,
                            height: 40,
                            borderWidth: 3,
                            margin: 3,
                            borderColor: menhGia === 20 ? 'red' : 'white'
                        }}
                        source={haiChuc}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(50)}>
                    <Image
                        style={{ width: 100, height: 40, borderWidth: 3, margin: 3, borderColor: menhGia === 50 ? 'red' : 'white' }}
                        source={namChuc}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 45, justifyContent: 'space-between', flexWrap: 'wrap' }} >
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(100)}>
                    <Image
                        style={{ width: 100, height: 40, borderWidth: 3, margin: 3, borderColor: menhGia === 100 ? 'red' : 'white' }}
                        source={motTram}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(200)}>
                    <Image
                        style={{ width: 100, height: 40, borderWidth: 3, margin: 3, borderColor: menhGia === 200 ? 'red' : 'white' }}
                        source={haiTram}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '33%', height: 40 }} onPress={() => changeMenhGia(500)}>
                    <Image
                        style={{ width: 100, height: 40, borderWidth: 3, margin: 3, borderColor: menhGia === 500 ? 'red' : 'white' }}
                        source={namTram}
                    />
                </TouchableOpacity>
            </View>

        </>
    )

};



export default Header