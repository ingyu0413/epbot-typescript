import { BuildingType, PartialStatEffect } from '../../types/types'
import { Building } from './base'

export class SimpleBox extends Building {
  static id = 'GMPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '간이 매표소'
  static description =
    '천막으로 만들어서 조금 어설프지만 매표소가 있다면 수수료를 조금 더 세밀하게 조정할 수 있겠죠?'

  static tier = 1
  static price = 300
  static effects: PartialStatEffect = {
    feeRange: 3,
  }
}

export class NormalBox extends Building {
  static id = 'MPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '매표소'
  static description =
    '입구에 좁지만 그래도 어엿한 건물인 매표소를 건설했어요! 수수료 조정이 더 자유로워질 거예요!'

  static tier = 2
  static price = 1500
  static effects: PartialStatEffect = {
    maintenance: 3,
    feeRange: 7,
  }
}

export class EventSign extends Building {
  static id = 'EPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '이벤트 표지판'
  static description =
    '특별 이벤트! 낚시터 수수료 감면! ...이라고 적힌 표지판입니다. 수수료를 낮게 설정하기 쉬워질 거예요!'

  static tier = 2
  static price = 1700
  static effects: PartialStatEffect = {
    maintenance: 2,
    feeMinDown: 12,
  }
}

export class FancyBox extends Building {
  static id = 'HPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '화려한 매표소'
  static description =
    '화려하게 장식된 매표소는 낚시터 주인이 돈독이 올랐다는 것을 표현하기 아주 좋은 수단이죠.'

  static tier = 2
  static price = 2000
  static effects: PartialStatEffect = {
    maintenance: 2,
    feeMaxUp: 12,
  }
}

export class HugeBox extends Building {
  static id = 'DMPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '대형 매표소'
  static description =
    '거대한 매표소 건물은 조금 더 체계적이고 확실하게 이용 요금을 받아낼 수 있게 해 줍니다!'

  static tier = 3
  static price = 5500
  static effects: PartialStatEffect = {
    maintenance: 5,
    feeRange: 15,
  }
}

export class SpecialEventSign extends Building {
  static id = 'CEPS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '초특가 이벤트 표지판'
  static description =
    '초! 특! 가! 강력하게 박힌 이 세 글자는 낚시터 주인이 수수료를 깎을 당위성을 제공해줍니다.'

  static tier = 3
  static price = 6000
  static effects: PartialStatEffect = {
    maintenance: 4,
    feeMinDown: 25,
  }
}

export class NonProfit extends Building {
  static id = 'BYRNS'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '비영리 낚시터'
  static description =
    '비영리라니 돈을 안 벌겠다는 소리인가요?! 자신의 사유 재산을 공공재화할 수 있는 넓은 마음의 사람만이 세울 수 있을 듯합니다.'

  static tier = 3
  static price = 8500
  static effects: PartialStatEffect = {
    maintenance: 5,
    feeMinDown: 100,
  }
}

export class TollGate extends Building {
  static id = 'TGIT'
  static emoji = '🏢'

  static buildingType = BuildingType.TicketBox
  static buildingName = '톨게이트'
  static description =
    '수수료 100%를 향한 여정... 낚시터 주인은 낚시터 입구에 톨게이트를 유치하기에 이릅니다.'

  static tier = 3
  static price = 6500
  static effects: PartialStatEffect = {
    maintenance: 2,
    feeMaxUp: 25,
  }
}