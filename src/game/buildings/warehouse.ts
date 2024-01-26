import { BuildingType, PartialStatEffect } from '../../types/types'
import { Building } from './base'

export class SmallWarehouse extends Building {
  static id = 'JCG'
  static emoji = '🏢'

  static buildingType = BuildingType.Warehouse
  static buildingName = '작은 창고'
  static description =
    '짜잔! 물가의 작은 창고예요! ...창고 안에서 뭘 하냐고요? 묻지 마세요!'

  static tier = 1
  static price = 300
  static effects: PartialStatEffect = {
    fee: 5,
    fishPointChance: 5,
    commonSample: 10,
  }
}

export class Discharge extends Building {
  static id = 'BRG'
  static emoji = '🏢'

  static buildingType = BuildingType.Warehouse
  static buildingName = '방류 창고'
  static description =
    '대놓고 설치한 방류 창고는 열심히 물고기를 물에 흘려보냅니다. 확실히 잘 낚이긴 하겠네요! 조금 흔한 물고기가 많이 낚이겠지만...'

  static tier = 2
  static price = 1500
  static effects: PartialStatEffect = {
    maintenance: 3,
    fee: 10,
    fishPointChance: 7,
    commonSample: 15,
  }
}

export class FancyDischarge extends Building {
  static id = 'HBRG'
  static emoji = '🏢'

  static buildingType = BuildingType.Warehouse
  static buildingName = '화려한 방류장'
  static description =
    '이 방류장은 꽤 화려한 게 제법 희귀한 물고기를 흘려 보내줄 것 같네요! 물론 그만큼 더 비싸지겠지만...'

  static tier = 2
  static price = 2100
  static effects: PartialStatEffect = {
    maintenance: 10,
    fee: 15,
    fishPointChance: 7,
    rareSample: 5,
  }
}

export class BigDischarge extends Building {
  static id = 'DBST'
  static emoji = '🏢'

  static buildingType = BuildingType.Warehouse
  static buildingName = '대형 방류 센터'
  static description =
    '이젠 대놓고 낚시꾼들 옆에서 물고기를 풀어줍니다! 방류 센터라니... 결국 풀어준 걸 다시 낚는 거잖아요. 이거 의미가 있는 건가요?'

  static tier = 3
  static price = 7000
  static effects: PartialStatEffect = {
    maintenance: 7,
    fee: 10,
    fishPointChance: 10,
    commonSample: 5,
  }
}

export class LuxuryDischarge extends Building {
  static id = 'HBST'
  static emoji = '🏢'

  static buildingType = BuildingType.Warehouse
  static buildingName = '호화로운 방류 센터'
  static description =
    '쓸데없이 고급진 물고기만 방류하는 방류 센터! 희귀한 물고기가 마구마구 잡히네요! 유지비 영수증... 그건 저리 놔 두세요.'

  static tier = 3
  static price = 9500
  static effects: PartialStatEffect = {
    maintenance: 15,
    fee: 10,
    fishPointChance: 10,
    rareSample: 15,
    epicSample: 5,
  }
}

//   "MB": {
//   "name": "대운하 사업",
//     "description": "그래! 바다, 강, 호수, 갯벌을 모두 뚫어버리면 모든 물고기가 잡히는 전설의 낚시터가 나오지 않을까요? 이 원대한 계획을 4대 낚시터 사업이라고 부르죠!",
//     "cost": 10000,
//     "tier": 3,
//     "biome": 2,
//     "branch": 3,
//     "effects": {
//     "maintenance": 30,
//       "fee": 10,
//       "probability": -3,
//       "2_rank": -100,
//       "3_rank": -100,
//       "4_rank": -100
//   }
// },
//   "YSG": {
//   "name": "양식장",
//     "description": "낚시터에 양식장을 놔 둬도 되는 거예요? 애초에 양식장 위에서 낚시를 하는 게 의미가 있는 건가요...?",
//     "cost": 4500,
//     "tier": 3,
//     "branch": 3,
//     "effects": {
//     "maintenance": 1,
//       "fee": 1,
//       "probability": 15,
//       "1_rank": 1000
//   }
// },
//   "GBGCSU": {
//   "name": "갯벌 간척사업",
//     "description": "갯벌을 간척하면 더 많은 땅을 확보할 수 있어요! 환경은... 읍읍",
//     "cost": 1000,
//     "tier": 2,
//     "biome": 6,
//     "branch": 3,
//     "effects": {
//     "_exp": 0.2,
//       "maintenance": -24,
//       "fee": -10
//   }
// },
//   "RC": {
//   "name": "람사르 협약",
//     "description": "https://ko.wikipedia.org/wiki/람사르협약",
//     "cost": 10000,
//     "tier": 3,
//     "biome": 5,
//     "branch": 3,
//     "effects": {
//     "_exp": 3.5,
//       "maintenance": 15,
//       "fee": 10
//   }
// }
// }