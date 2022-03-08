const  pokeCard  =  documento . querySelector ( '[datos-poke-card]' ) ;
const  pokeName  =  documento . querySelector ( '[datos-poke-name]' ) ;
const  pokeImg  =  documento . querySelector ( '[datos-poke-img]' ) ;
const  pokeImgContainer  =  documento . querySelector ( '[data-poke-img-container]' ) ;
const  pokeId  =  documento . querySelector ( '[datos-poke-id]' ) ;
const  pokeTypes  =  documento . querySelector ( '[datos-poke-tipos]' ) ;
const  pokeStats  =  documento . querySelector ( '[datos-poke-stats]' ) ;

const  tipoColores  =  {
    eléctrico : '#FFEA70' ,
    normales : '#B09398' ,
    fuego : '#FF675C' ,
    agua : '#0596C7' ,
    hielo : '#AFEAFD' ,
    roca : '#999799' ,
    volando : '#7AE7C7' ,
    hierba : '#4A9681' ,
    psíquico : '#FFC6D9' ,
    fantasma : '#561D25' ,
    error : '#A2FAA3' ,
    veneno : '#795663' ,
    suelo : '#D2B074' ,
    dragón : '#DA627D' ,
    acero : '#1D8A99' ,
    luchando : '#2F2F2F' ,
    predeterminado : '#2A1A1F' ,
} ;


const  buscarPokemon  =  evento  =>  {
    evento _ prevenirPredeterminado ( ) ;
    const  { valor }  =  evento . objetivo _ Pokémon ;
    buscar ( `https://pokeapi.co/api/v2/pokemon/ ${ valor . toLowerCase ( ) } ` )
        . entonces ( datos  =>  datos . json ( ) )
        . entonces ( respuesta  =>  renderPokemonData ( respuesta ) )
        . captura ( err  =>  renderNotFound ( ) )
}

const  renderPokemonData  =  datos  =>  {
    const  sprite  =   datos . duendes _ frente_predeterminado ;
    const  { estadísticas , tipos }  =  datos ;

    pokeNombre . contenido de texto  =  datos . nombre ;
    pokeImg . setAttribute ( 'src' ,  sprite ) ;
    pokeId . textContent  =  `Nº ${ datos . id } ` ;
    setCardColor ( tipos ) ;
    renderPokemonTypes ( tipos ) ;
    renderPokemonStats ( estadísticas ) ;
}


const  setCardColor  =  tipos  =>  {
    const  colorOne  =  typeColors [ tipos [ 0 ] . tipo _ nombre ] ;
    const  colorDos  =  tipos [ 1 ] ? typeColors [ tipos [ 1 ] . tipo _ nombre ] : tipoColores . predeterminado ;
    pokeImg . estilo _ fondo  =   `gradiente radial ( ${ colorDos } 33%, ${ colorUno } 33%)` ;
    pokeImg . estilo _ tamaño de fondo  =  ' 5px 5px' ;
}

const  renderPokemonTypes  =  tipos  =>  {
    tipos de poke . HTML interno  =  '' ;
    tipos _ paraCada ( tipo  =>  {
        const  typeTextElement  =  documento . crearElemento ( "div" ) ;
        tipoTextoElemento . estilo _ color  =  tipoColores [ tipo . tipo _ nombre ] ;
        tipoTextoElemento . contenido de texto  =  tipo . tipo _ nombre ;
        tipos de poke . appendChild ( typeTextElement ) ;
    } ) ;
}

const  renderPokemonStats  =  estadísticas  =>  {
    pokeEstadísticas . HTML interno  =  '' ;
    estadísticas _ paraCada ( estadísticas  =>  {
        const  stateElement  =  documento . crearElemento ( "div" ) ;
        const  statElementName  =  documento . crearElemento ( "div" ) ;
        const  statElementAmount  =  documento . crearElemento ( "div" ) ;
        statElementName . contenido de texto = stat  . estadística _ nombre ; 
        CantidadElementoDeLaEstado . contenido de texto = stat  . base_stat ; 
        elemento de estado . appendChild ( nombreElementoEstad ) ;
        elemento de estado . appendChild ( cantidadElementoEstad ) ;
        pokeEstadísticas . appendChild ( elementoestado ) ;
    } ) ;
}

const  renderNotFound  =  ( )  =>  {
    pokeNombre . textContent  =  'No encontrado' ;
    pokeImg . setAttribute ( 'src' ,  'poke-shadow.png' ) ;
    pokeImg . estilo _ fondo  =   '#fff' ;
    tipos de poke . HTML interno  =  '' ;
    pokeEstadísticas . HTML interno  =  '' ;
    pokeId . contenido del texto  =  '' ;
}