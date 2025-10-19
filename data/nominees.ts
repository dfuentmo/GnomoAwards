// src/data/nominees.ts
export const nominadosPorCategoria: Record<
  string,
  Array<{ id: string; nombre: string; descripcion: string; tipo: "imagen" | "youtube" | "twitch"; src: string; clipId?: string }>
> = {
  // COMUNIDAD
  "mejor-clip": [
    { id: "1", nombre: "SetaVoladora", descripcion: "Por el salto mortal sin red en directo.", tipo: "twitch", src: "https://www.twitch.tv/wildgnomos/clip/TangentialPluckyBadgerCorgiDerp-LNBL3eSL0_kcWXF0", clipId: "TangentialPluckyBadgerCorgiDerp-LNBL3eSL0_kcWXF0" },
    { id: "2", nombre: "GnomoExplosivo", descripcion: "Por el momento más inesperado del año.", tipo: "imagen", src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg" },
    { id: "3", nombre: "FungiFail", descripcion: "Por el bug más legendario del bosque.", tipo: "youtube", src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: "4", nombre: "RaízRápida", descripcion: "Por su reflejo legendario al esquivar un cubo de compost.", tipo: "imagen", src: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg" },
  ],

  "mejor-raider": [
    { id: "1", nombre: "RaidMaster", descripcion: "Siempre liderando las raids con éxito.", tipo: "imagen", src: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg" },
    { id: "2", nombre: "GuildHero", descripcion: "El héroe de la guild en cada evento.", tipo: "youtube", src: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
    { id: "3", nombre: "Tankinator", descripcion: "Imparable en combate, siempre presente.", tipo: "twitch", src: "https://clips.twitch.tv/clip/ClipOfTankinator", clipId: "ClipOfTankinator" },
    { id: "4", nombre: "HealWizard", descripcion: "Sus curaciones salvaron a todos más de una vez.", tipo: "imagen", src: "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg" },
  ],

  "mayor-racha-subs": [
    { id: "1", nombre: "SubKing", descripcion: "Mantiene la racha de subs más larga.", tipo: "imagen", src: "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg" },
    { id: "2", nombre: "LoyalFan", descripcion: "Siempre presente cada mes sin falta.", tipo: "youtube", src: "https://www.youtube.com/watch?v=3tmd-ClpJxA" },
    { id: "3", nombre: "GoldenGnome", descripcion: "Nunca pierde un sub y siempre comenta.", tipo: "twitch", src: "https://clips.twitch.tv/clip/GoldenGnomeClip", clipId: "GoldenGnomeClip" },
    { id: "4", nombre: "TopSubscriber", descripcion: "Ejemplo de fidelidad y dedicación.", tipo: "imagen", src: "https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg" },
  ],

  "mayor-racha-actual-total-anual": [
    { id: "1", nombre: "RachaLegendaria", descripcion: "Su constancia es inigualable.", tipo: "imagen", src: "https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg" },
    { id: "2", nombre: "SubStreak", descripcion: "Nunca falla en sus suscripciones.", tipo: "youtube", src: "https://www.youtube.com/watch?v=oHg5SJYRHA0" },
    { id: "3", nombre: "GnomeFan", descripcion: "Un fan comprometido y constante.", tipo: "twitch", src: "https://clips.twitch.tv/clip/GnomeFanClip", clipId: "GnomeFanClip" },
    { id: "4", nombre: "EverSub", descripcion: "Siempre presente en todos los eventos.", tipo: "imagen", src: "https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg" },
  ],

  "mayor-racha-perdida": [
    { id: "1", nombre: "LostStreak", descripcion: "Una racha perdida que nadie olvidará.", tipo: "imagen", src: "https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg" },
    { id: "2", nombre: "AlmostThere", descripcion: "Estuvo cerca de batir récords.", tipo: "youtube", src: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
    { id: "3", nombre: "SubGone", descripcion: "Su ausencia dejó huella en el chat.", tipo: "twitch", src: "https://clips.twitch.tv/clip/SubGoneClip", clipId: "SubGoneClip" },
    { id: "4", nombre: "MissedStreak", descripcion: "Una racha épica que terminó pronto.", tipo: "imagen", src: "https://images.pexels.com/photos/10123456/pexels-photo-10123456.jpeg" },
  ],

  "seguidor-mas-horas": [
    { id: "1", nombre: "NightOwl", descripcion: "Siempre presente en cada stream nocturno.", tipo: "imagen", src: "https://images.pexels.com/photos/11123456/pexels-photo-11123456.jpeg" },
    { id: "2", nombre: "GnomeWatcher", descripcion: "El más dedicado en tiempo de visionado.", tipo: "youtube", src: "https://www.youtube.com/watch?v=L_jWHffIx5E" },
    { id: "3", nombre: "TimeKeeper", descripcion: "Horas infinitas viendo el canal.", tipo: "twitch", src: "https://clips.twitch.tv/clip/TimeKeeperClip", clipId: "TimeKeeperClip" },
    { id: "4", nombre: "StreamAddict", descripcion: "Amante de todos los directos.", tipo: "imagen", src: "https://images.pexels.com/photos/12123456/pexels-photo-12123456.jpeg" },
  ],

  // HUMOR
  "premio-postumo": [
    { id: "1", nombre: "LuisQueFue", descripcion: "Desapareció una noche de raid. Nunca volvió.", tipo: "imagen", src: "https://images.pexels.com/photos/13123456/pexels-photo-13123456.jpeg" },
    { id: "2", nombre: "FantasmaDelChat", descripcion: "Se aparece solo en los clips antiguos.", tipo: "youtube", src: "https://www.youtube.com/watch?v=V-_O7nl0Ii0" },
    { id: "3", nombre: "SilencioEterno", descripcion: "Dejó un !gnomo y se fue para siempre.", tipo: "twitch", src: "https://clips.twitch.tv/clip/SilencioEternoClip", clipId: "SilencioEternoClip" },
    { id: "4", nombre: "CuentaSuspendida", descripcion: "Su memoria vive en los logs del bot.", tipo: "imagen", src: "https://images.pexels.com/photos/14123456/pexels-photo-14123456.jpeg" },
  ],

  // CREATIVOS
  "construccion-inspirada": [
    { id: "1", nombre: "MiniCabaña", descripcion: "Creó una cabaña inspirada en el bosque.", tipo: "imagen", src: "https://images.pexels.com/photos/15123456/pexels-photo-15123456.jpeg" },
    { id: "2", nombre: "HuertoMagico", descripcion: "Un huerto lleno de creatividad.", tipo: "youtube", src: "https://www.youtube.com/watch?v=60ItHLz5WEA" },
    { id: "3", nombre: "GallineroArte", descripcion: "Transformó un gallinero en obra de arte.", tipo: "twitch", src: "https://clips.twitch.tv/clip/GallineroArteClip", clipId: "GallineroArteClip" },
    { id: "4", nombre: "RincónGnómico", descripcion: "Su rincón físico refleja la comunidad.", tipo: "imagen", src: "https://images.pexels.com/photos/16123456/pexels-photo-16123456.jpeg" },
  ],

  "mejor-aportacion": [
    { id: "1", nombre: "ManoAmiga", descripcion: "Siempre ayudando al canal y la comunidad.", tipo: "imagen", src: "https://images.pexels.com/photos/17123456/pexels-photo-17123456.jpeg" },
    { id: "2", nombre: "GnomeHelper", descripcion: "Aportaciones constantes y creativas.", tipo: "youtube", src: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
    { id: "3", nombre: "CommunityBuilder", descripcion: "Fortalece la comunidad cada día.", tipo: "twitch", src: "https://clips.twitch.tv/clip/CommunityBuilderClip", clipId: "CommunityBuilderClip" },
    { id: "4", nombre: "GnomoProactivo", descripcion: "Siempre haciendo algo por todos.", tipo: "imagen", src: "https://images.pexels.com/photos/18123456/pexels-photo-18123456.jpeg" },
  ],

  "mejor-fan-art": [
    { id: "1", nombre: "ArteMicelio", descripcion: "Por ilustrar cada brote con magia.", tipo: "imagen", src: "https://images.pexels.com/photos/19123456/pexels-photo-19123456.jpeg" },
    { id: "2", nombre: "RaícesDeColor", descripcion: "Por el retrato más vibrante del canal.", tipo: "youtube", src: "https://www.youtube.com/watch?v=04854XqcfCY" },
    { id: "3", nombre: "PincelGnómico", descripcion: "Por su uso magistral de la luz de luciérnaga.", tipo: "twitch", src: "https://clips.twitch.tv/clip/PincelGnómicoClip", clipId: "PincelGnómicoClip" },
    { id: "4", nombre: "SetaPixelada", descripcion: "Por mantener vivo el arte digital gnómico.", tipo: "imagen", src: "https://images.pexels.com/photos/20123456/pexels-photo-20123456.jpeg" },
  ],

  "mejor-meme": [
    { id: "1", nombre: "MemeGnomo", descripcion: "El meme más viral del chat.", tipo: "imagen", src: "https://images.pexels.com/photos/21123456/pexels-photo-21123456.jpeg" },
    { id: "2", nombre: "FunnyGnome", descripcion: "Risas garantizadas cada vez.", tipo: "youtube", src: "https://www.youtube.com/watch?v=ZZ5LpwO-An4" },
    { id: "3", nombre: "GnomeLOL", descripcion: "Siempre creando memes legendarios.", tipo: "twitch", src: "https://clips.twitch.tv/clip/GnomeLOLClip", clipId: "GnomeLOLClip" },
    { id: "4", nombre: "ChatMeme", descripcion: "Los mejores momentos inmortalizados.", tipo: "imagen", src: "https://images.pexels.com/photos/22123456/pexels-photo-22123456.jpeg" },
  ],

  "mejor-mensaje-chat": [
    { id: "1", nombre: "ChatLegend", descripcion: "Comentario épico que todos recuerdan.", tipo: "imagen", src: "https://images.pexels.com/photos/23123456/pexels-photo-23123456.jpeg" },
    { id: "2", nombre: "WittyGnome", descripcion: "Ingenio en cada mensaje.", tipo: "youtube", src: "https://www.youtube.com/watch?v=ub82Xb1C8os" },
    { id: "3", nombre: "EpicComment", descripcion: "Su mensaje se volvió leyenda.", tipo: "twitch", src: "https://clips.twitch.tv/clip/EpicCommentClip", clipId: "EpicCommentClip" },
    { id: "4", nombre: "FunnyMessage", descripcion: "Siempre divertido y memorable.", tipo: "imagen", src: "https://images.pexels.com/photos/24123456/pexels-photo-24123456.jpeg" },
  ],
};

