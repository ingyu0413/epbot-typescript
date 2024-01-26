import { BuildingType, PartialStatEffect } from '../../types/types'
import { Building } from './base'

export class StreetVendor extends Building {
  static id = 'PJM'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '포장마차'
  static description =
    '옆에 생긴 작은 포장마차에서 물고기를 사 준 답니다!'

  static tier = 1
  static price = 300
  static effects: PartialStatEffect = {
    fishPriceCoef: 1.05,
  }
}

export class MarketPlace extends Building {
  static id = 'SJG'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '시장가'
  static description =
    '시장에서 바로 파니까 조금 더 이득을 얻을 수 있을 거예요!'

  static tier = 2
  static price = 2200
  static effects: PartialStatEffect = {
    maintenance: 3,
    fishPriceCoef: 1.15,
  }
}

export class Restauant extends Building {
  static id = 'SD'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '식당'
  static description =
    '낚시터 옆에 식당이 생겼어요! 낚시꾼들이 여기에 바로 물고기를 팔 수 있을 거예요!'

  static tier = 2
  static price = 2200
  static effects: PartialStatEffect = {
    maintenance: 1,
    fishPriceCoef: 1.1,
  }
}

export class GIS extends Building {
  static id = 'JPSJ'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '지리적 표시제'
  static description =
    '지리적 표시제 인증을 받았어요! 프랑스 샹파뉴의 샴페인처럼 이프 낚시터의 물고기라고요!'

  static tier = 3
  static price = 8500
  static effects: PartialStatEffect = {
    maintenance: 5,
    fishPriceCoef: 1.5,
  }
}

export class RawFishRestaurant extends Building {
  static id = 'HJSDG'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '횟집 식당가'
  static description =
    '횟집...! 회는 맛있어요! 비싼 돈을 주더라도 사람들이 먹겠죠! 어, 이프한테는 할인해 줄 거죠...?'

  static tier = 3
  static price = 6700
  static effects: PartialStatEffect = {
    maintenance: 1,
    fishPriceCoef: 1.2,
  }
}

export class TunaFactory extends Building {
  static id = 'CCGJ'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '참치 공장'
  static description =
    '참치! 참치! 참치! 바로 옆에 생긴 대형 참치 공장에 물고기를 직접 납품할 수 있어요! 환경은... 조금 불안하지만요.'

  static tier = 3
  static price = 9200
  static effects: PartialStatEffect = {
    maintenance: -10,
    fishPriceCoef: 1.5,
    trashSample: 10,
  }
}

export class AdvStrategy extends Building {
  static id = 'GHJR'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '고급화 전략'
  static description =
    '똑같은 거라도 오히려 가성비로 포장된 싼 것보다 쓸데없이 고급스럽게 포장되어 비싸게 파는 게 더 잘 나간다는 연구 결과를 본 것 같아요!'

  static tier = 3
  static price = 8500
  static effects: PartialStatEffect = {
    maintenance: 25,
    fishPriceCoef: 2,
  }
}

export class IllegalFacility extends Building {
  static id = 'BBSSM'
  static emoji = '🏢'

  static buildingType = BuildingType.Restaurant
  static buildingName = '불법 시설물'
  static description =
    '삼계탕 한 그릇이 65,000원! 계곡의 불법 시설물을 눈 감아주는 대신 자릿세를 받아 보자구요!'

  static tier = 2
  static price = 100
  static biome = 4
  static effects: PartialStatEffect = {
    maintenance: -35,
    fee: 40,
    expCoef: 0.2,
  }
}