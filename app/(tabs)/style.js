export default {
    styleHeader: {
        backgroundColor: '#496989',
        // backgroundColor: '#9CAFAA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal: 20,
    },

    styleSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 5,
    },

    input: {
        height: 40,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        width: 290,
        backgroundColor: '#dddddd',
    },

    styleCategory: {
        // tabBarItemStyle: { // style de tous les boutons de la tabBar
        //     backgroundColor: '#dddddd',
        //     borderRadius: 50,
        //     justifyContent: 'space-between',
        // },
        // tabBarIndicatorStyle: { // le tiret blue par defaut
        //     height: 0,
        // },
        // tabBarPressColor: 'transparent' // le hover
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },

    styleBoutonCategory: {
        backgroundColor: '#dddddd',
        padding: 10,
        borderRadius: 50,
        paddingHorizontal: 20,
        fontSize: 12, // le style qu'il faut changer a propos de la taille de l'ecran
    },

    // style du body 
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        paddingBottom: 30,
        borderBottomColor: 'white'
    },

    styleImage: {
        width: 340,// le style qu'il faut changer a propos de la taille de l'ecran
        height: 150,
        borderRadius: 20,
        marginBottom: 10,
    },

    styleDesc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f3ff',
        height: 40,
        paddingHorizontal: 10,
        width: 320,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    styleMenu: {
        position: 'absolute',
        backgroundColor: '#dddddd',
        zIndex: 10,
        height: 100 + '%',
        width: 80 + '%',
    },

    styleOptionMenu: {
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 50,
        marginHorizontal: 10,
    },

    BtnPhoto: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 10,
    }
}   