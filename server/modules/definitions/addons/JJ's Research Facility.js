const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, skillSet } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
g.minorReload = { reload: 2.5 };
g.minorRecoil = { recoil: 0.25 };
g.minorShudder = { shudder: 0.25 };
g.minorDamage = { damage: 0.25 };
g.minorSpeed = { speed: 0.25 };
g.minorSpray = { spray: 0.25 };
g.minorSize = { size: 0.25 };
g.minorHealth = { health: 0.25 };
g.minorPenetration = { pen: 0.25 };
g.minorResist = { resist: 0.25 };
g.minorMaxSpeed = { maxSpeed: 0.25 };
g.minorDensity = { density: 0.25 };

g.halfReload = { reload: 2 };
g.halfRecoil = { recoil: 0.5 };
g.halfShudder = { shudder: 0.5 };
g.halfDamage = { damage: 0.5 };
g.halfSpeed = { speed: 0.5 };
g.halfSpray = { spray: 0.5 };
g.halfSize = { size: 0.5 };
g.halfHealth = { health: 0.5 };
g.halfPenetration = { pen: 0.5 };
g.halfResist = { resist: 0.5 };
g.halfMaxSpeed = { maxSpeed: 0.5 };
g.halfDensity = { density: 0.5 };

g.lesserReload = { reload: 1.5 };
g.lesserRecoil = { recoil: 0.75 };
g.lesserShudder = { shudder: 0.75 };
g.lesserDamage = { damage: 0.75 };
g.lesserSpeed = { speed: 0.75 };
g.lesserSpray = { spray: 0.75 };
g.lesserSize = { size: 0.75 };
g.lesserHealth = { health: 0.75 };
g.lesserPenetration = { pen: 0.75 };
g.lesserResist = { resist: 0.75 };
g.lesserMaxSpeed = { maxSpeed: 0.75 };
g.lesserDensity = { density: 0.75 };

g.bitLessReload = { reload: 1.25 };
g.bitLessRecoil = { recoil: 0.875 };
g.bitLessShudder = { shudder: 0.875 };
g.bitLessDamage = { damage: 0.875 };
g.bitLessSpeed = { speed: 0.875 };
g.bitLessSpray = { spray: 0.875 };
g.bitLessSize = { size: 0.875 };
g.bitLessHealth = { health: 0.875 };
g.bitLessPenetration = { pen: 0.875 };
g.bitLessResist = { resist: 0.875 };
g.bitLessMaxSpeed = { maxSpeed: 0.875 };
g.bitLessDensity = { density: 0.875 };

g.bitMoreReload = { reload: 0.875 };
g.bitMoreRecoil = { recoil: 1.25 };
g.bitMoreShudder = { shudder: 1.25 };
g.bitMoreDamage = { damage: 1.25 };
g.bitMoreSpeed = { speed: 1.25 };
g.bitMoreSpray = { spray: 1.25 };
g.bitMoreSize = { size: 1.25 };
g.bitMoreHealth = { health: 1.25 };
g.bitMorePenetration = { pen: 1.25 };
g.bitMoreResist = { resist: 1.25 };
g.bitMoreMaxSpeed = { maxSpeed: 1.25 };
g.bitMoreDensity = { density: 1.25 };

g.greaterReload = { reload: 0.75 };
g.greaterRecoil = { recoil: 1.5 };
g.greaterShudder = { shudder: 1.5 };
g.greaterDamage = { damage: 1.5 };
g.greaterSpeed = { speed: 1.5 };
g.greaterSpray = { spray: 1.5 };
g.greaterSize = { size: 1.5 };
g.greaterHealth = { health: 1.5 };
g.greaterPenetration = { pen: 1.5 };
g.greaterResist = { resist: 1.5 };
g.greaterMaxSpeed = { maxSpeed: 1.5 };
g.greaterDensity = { density: 1.5 };

g.doubleReload = { reload: 0.5 };
g.doubleRecoil = { recoil: 2 };
g.doubleShudder = { shudder: 2 };
g.doubleDamage = { damage: 2 };
g.doubleSpeed = { speed: 2 };
g.doubleSpray = { spray: 2 };
g.doubleSize = { size: 2 };
g.doubleHealth = { health: 2 };
g.doublePenetration = { pen: 2 };
g.doubleResist = { resist: 2 };
g.doubleMaxSpeed = { maxSpeed: 2 };
g.doubleDensity = { density: 2 };

g.superReload = { reload: 0.25 };
g.superRecoil = { recoil: 2.5 };
g.superShudder = { shudder: 2.5 };
g.superDamage = { damage: 2.5 };
g.superSpeed = { speed: 2.5 };
g.superSpray = { spray: 2.5 };
g.superSize = { size: 2.5 };
g.superHealth = { health: 2.5 };
g.superPenetration = { pen: 2.5 };
g.superResist = { resist: 2.5 };
g.superMaxSpeed = { maxSpeed: 2.5 };
g.superDensity = { density: 2.5 };

g.uberReload = { reload: 0.0001 };
g.uberRecoil = { recoil: 99 };
g.uberShudder = { shudder: 99 };
g.uberDamage = { damage: 99 };
g.uberSpeed = { speed: 99 };
g.uberSpray = { spray: 99 };
g.uberSize = { size: 99 };
g.uberHealth = { health: 99 };
g.uberPenetration = { pen: 99 };
g.uberResist = { resist: 99 };
g.uberMaxSpeed = { maxSpeed: 99 };
g.uberDensity = { density: 99 };

g.weakReload = { reload: 99 };
g.weakRecoil = { recoil: 0.0001 };
g.weakShudder = { shudder: 0.0001 };
g.weakDamage = { damage: 0.0001 };
g.weakSpeed = { speed: 0.0001 };
g.weakSpray = { spray: 0.0001 };
g.weakSize = { size: 0.0001 };
g.weakHealth = { health: 0.0001 };
g.weakPenetration = { pen: 0.0001 };
g.weakResist = { resist: 0.0001 };
g.weakMaxSpeed = { maxSpeed: 0.0001 };
g.weakDensity = { density: 0.0001 };

g.minorRange = { range: 0.25 };
g.halfRange = { range: 0.5 };
g.lesserRange = { range: 0.75 };
g.bitLessRange = { range: 0.875 };
g.bitMoreRange = { range: 1.25 };
g.greaterRange = { range: 1.5 };
g.doubleRange = { range: 2 };
g.superRange = { range: 2.5 };
g.uberRange = { range: 99 };
g.weakRange = { range: 0.0001 };

g.minorStats = { pen: 0.25, damage: 0.25, health: 0.25 };
g.halfStats = { pen: 0.5, damage: 0.5, health: 0.5 };
g.lesserStats = { pen: 0.75, damage: 0.75, health: 0.75 };
g.bitLessStats = { pen: 0.875, damage: 0.875, health: 0.875 };
g.bitMoreStats = { pen: 1.25, damage: 1.25, health: 1.25 };
g.greaterStats = { pen: 1.5, damage: 1.5, health: 1.5 };
g.doubleStats = { pen: 2, damage: 2, health: 2 };
g.superStats = { pen: 2.5, damage: 2.5, health: 2.5 };
g.uberStats = { pen: 99, damage: 99, health: 99 };
g.weakStats = { pen: 0.0001, damage: 0.0001, health: 0.0001 };

g.bounce = { reload: 25, recoil: 25, health: 0.01, damage: 0.01, speed: 0.01, maxSpeed: 0.01, range: 0.01 };
g.bang = { reload: 6.5, recoil: 0.1, health: 999, speed: 0.5, range: 0.75 };

//ASSETS
//BODYS
//BULLETS
Class.smasherBullet = {
  PARENT:  ["bullet"],
  TURRETS: [
    {
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: "smasherBody",
    },
  ],
};
//TRAPS
//MISSILES
//TURRETS
Class.weakAutoSmasherTurret = {
  PARENT: ["autoTurret"],
  GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: "fixedReload",
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: "fixedReload",
            },
        },
  ],
};
Class.strongAuto3Gun = {
  PARENT: ["autoTurret"],
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  INDEPENDENT: false,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.autoTurret, g.pounder]),
        TYPE: "bullet",
      },
    },
  ],
};
Class.hexaAutoRingIF = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: 1,
  BODY: {
    FOV: 1.1,
  },
  COLOR: 16,
  INDEPENDENT: false,
  TURRETS: [
    {
      POSITION: [2.25, 11, 0, 0, 360, 1],
      TYPE: "strongAuto3Gun",
    },
    {
      POSITION: [2.25, 11, 0, 60, 360, 1],
      TYPE: "strongAuto3Gun",
    },
    {
      POSITION: [2.25, 11, 0, 120, 360, 1],
      TYPE: "strongAuto3Gun",
    },
    {
      POSITION: [2.25, 11, 0, 180, 360, 1],
      TYPE: "strongAuto3Gun",
    },
    {
      POSITION: [2.25, 11, 0, 240, 360, 1],
      TYPE: "strongAuto3Gun",
    },
    {
      POSITION: [2.25, 11, 0, 300, 360, 1],
      TYPE: "strongAuto3Gun",
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 12, 1, 9, 0, 30, 0],
    },
    {
      POSITION: [1, 12, 1, 9, 0, 90, 0],
    },
    {
      POSITION: [1, 12, 1, 9, 0, 150, 0],
    },
    {
      POSITION: [1, 12, 1, 9, 0, -150, 0],
    },
    {
      POSITION: [1, 12, 1, 9, 0, -90, 0],
    },
    {
      POSITION: [1, 12, 1, 9, 0, -30, 0],
    },
  ],
};
//MINIONS
Class.fullAutoGuardMinion = {
  PARENT: ["minion"],
  LABEL: "Guard",
  VARIES_IN_SIZE: true,
  GUNS: [],
  TURRETS: [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: ['autoTurret'],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: "autoTankGun",
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: "autoTankGun",
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: "autoTankGun",
    },
  ],
};
Class.bansheeGuardMinion = {
  PARENT: ["minion"],
  LABEL: "Guard",
  VARIES_IN_SIZE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ 
      POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: "autoTankGun",
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: "autoTankGun",
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: "autoTankGun",
    },
  ],
  GUNS: [
    {
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.sunchip,
          g.lesserDamage,
          g.lesserHealth,
          g.halfSize,
        ]),
        TYPE: "eggchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.sunchip,
          g.lesserDamage,
          g.lesserHealth,
          g.halfSize,
        ]),
        TYPE: "eggchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.sunchip,
          g.lesserDamage,
          g.lesserHealth,
          g.halfSize,
        ]),
        TYPE: "eggchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
  ],
};
Class.spawnerGuard = {
  PARENT: ["minion"],
  LABEL: "Guard",
  VARIES_IN_SIZE: true,
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10.5, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory, 
          g.babyFactory,
          g.minionGun,
        ]),
        TYPE: "minion",
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 0, 0],
    },
  ],
};
Class.beekeeperProtectorMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Protector",
  SHAPE: 4,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bee,
          g.minionGun,
          g.greaterHealth,
        ]),
        TYPE: "bee",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.bee,
          g.minionGun,
          g.greaterHealth,
        ]),

        TYPE: "bee",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
  ],
};

Class.swarmerProtectorMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Protector",
  SHAPE: 4,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder, 
          g.launcher,
          g.minionGun,
        ]),
        TYPE: "hive",
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
Class.beeCruiserProtectorMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Protector",
  SHAPE: 4,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10.5, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [14, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.minionGun, g.doubleSize]),
                TYPE: ["bee", { INDEPENDENT: true }],
        },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 0, 0],
      },
    {
      POSITION: [14, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.minionGun, g.doubleSize]),
                TYPE: ["bee", { INDEPENDENT: true }],
        },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 0, 0],
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.minionGun]),
        TYPE: "bullet",
        },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 0, 0],
    },
  ],
};
Class.overBasicKeeperMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Keeper",
  SHAPE: 3,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.minionGun]),
        TYPE: "drone",
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.minionGun]),
        TYPE: "drone",
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
        TYPE: "bullet",
      },
    },
  ],
};
Class.commanderKeeperMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Keeper",
    SHAPE: 3,
    TURRETS: [],
    GUNS: weaponArray([
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [11, 8.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.minionGun]),
          TYPE: ["swarm", { CONTROLLERS: ["canRepel"] }],
          STAT_CALCULATOR: statnames.swarm,
        },
      },
      {
        POSITION: [6, 11, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.minionGun]),
          TYPE: "drone",
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
        },
      },
    ], 3)
  }
Class.directorKeeperMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Keeper",
  SHAPE: 3,
  TURRETS: [],
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.overseer,
          g.lesserReload,
          g.minionGun,
        ]),
        TYPE: "drone",
        AUTOFIRE: true,
        STAT_CALCULATOR: statnames.drone,
      },
    },
  ],
};
Class.crossbowSentinelMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Sentinel",
  SHAPE: 5,
  WALL_IMMUNITY: true,
  TURRETS: [],
  GUNS: [
    {
      POSITION: [15.5, 3.5, 1, 0, -2.3, -19.5, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.artillery,
          g.crossbow,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [15.5, 3.5, 1, 0, 2.3, 19.5, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.artillery,
          g.crossbow,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 4.5, 1, 0, 3.7, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.artillery,
          g.crossbow,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20, 4.5, 1, 0, -3.7, 0, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.artillery,
          g.crossbow,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.crossbow,
          g.greaterStats,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
  ],
};
Class.minigunSentinelMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Sentinel",
  SHAPE: 5,
  TURRETS: [],
  GUNS: [
    {
      POSITION: [14.5, 7.5, 0.6, 0, 5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
          g.doublePenetration,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [12.5, 7.5, 0.5, 0, 5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
          g.doublePenetration,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [14.5, 7.5, 0.6, 0, -5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
          g.doublePenetration,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [12.5, 7.5, 0.5, 0, -5.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
          g.doublePenetration,
        ]),
        TYPE: "bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22.3, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
          g.doublePenetration,
          g.doubleReload,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [20.3, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [18.3, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minigun,
          g.minorRecoil,
          g.minionGun,
        ]),
        TYPE: "bullet",
      },
    },
  ],
};

Class.launcherSentinelMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Sentinel",
  SHAPE: 5,
  TURRETS: [],

  GUNS: [
    {
      POSITION: [20, 10, 1, , 0, , 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.minionGun]),
        TYPE: "missile",
      },
    },
  ],
};
Class.auto5SentinelMinion = {
  PARENT: ["fullAutoGuardMinion"],
  LABEL: "Sentinel",
  SHAPE: 5,
  TURRETS: [],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ 
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: "pentagon",
    },
    {
    POSITION: [10, 8, 0, 180, 80, 0],
      TYPE: "autoTurret",
    },
    {
      POSITION: [10, 8, 0, -105, 80, 0],
      TYPE: "autoTurret",
    },
    {
      POSITION: [10, 8, 0, 105, 80, 0],
      TYPE: "autoTurret",
    },
    {
      POSITION: [10, 8, 0, 35, 80, 0],
      TYPE: "autoTurret",
    },
    {
      POSITION: [10, 8, 0, -35, 80, 0],
      TYPE: "autoTurret",
    },
  ],
};
Class.mortarCenturionMinion = {
  PARENT: ["crossbowSentinelMinion"],
  LABEL: "Centurion",
  SPECIAL_EFFECT: "noRegen",
  TARGETABLE: true,
  WALL_IMMUNITY: true,
  GROWTH_FACTOR: 3.5,
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 7.5,
    SHIELD: 0.1,
    REGEN: -1,
    DAMAGE: 0.55,
    RESIST: 0.02,
    RANGE: 100,
    DENSITY: 150,
  },
  DRAW_HEALTH: true,
  SHAPE: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.artillery,
          g.lesserDamage,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.artillery,
          g.lesserDamage,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.artillery,
          g.lesserDamage,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.artillery,
          g.lesserDamage,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          g.lesserDamage,
          g.lesserHealth,
        ]),
        TYPE: "bullet",
      },
    },
  ],
};

Class.swarmMasterCenturionMinion = {
  PARENT: ["mortarCenturionMinion"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.minionGun, g.halfRecoil]),
                TYPE: ["bee", { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [14, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.minionGun, g.halfRecoil]),
                TYPE: ["bee", { INDEPENDENT: true }],
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          g.launcher,
          g.minionGun,
          g.halfRecoil,
        ]),
        TYPE: "hive",
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
Class.smasherMinion = {
  PARENT: ["minion"],
  BODY: {
    FOV: 0.6,
    SPEED: 0.85,
    ACCELERATION: 0.75,
    HEALTH: 10,
    SHIELD: 0,
    REGEN: -1,
    DAMAGE: 1,
    RESIST: 1,
    PENETRATION: 1.25,
    RANGE: 100,
    DENSITY: 50,
  },
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapTargetToGoal",
    "canRepel",
    "hangOutNearMaster",
  ],
  GUNS: [],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: "smasherBody",
    },
  ],
  IS_SMASHER: true,
};
Class.autoSmasherMinion = {
  PARENT: ["smasherMinion"],
  LABEL: "Auto-Smasher Minion",
 /* BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 4.5,
    SHIELD: 1,
    REGEN: 0.5,
    DAMAGE: 0.55,
    RESIST: 1,
    PENETRATION: 1,
    RANGE: 100,
    DENSITY: 8,
  },*/
  GUNS: [],
  DRAW_HEALTH: true,
  TURRETS: [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: "weakAutoSmasherTurret",
    },
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: "smasherBody",
    },
  ],
};
//ENEMEIS
//BOSSES
//SPECIAL Tanks
Class.conductor = {
  PARENT: ["genericTank"],
  LABEL: "Conductor",
  SPECIAL_EFFECT: "Legend",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.75,
    HEALTH: base.HEALTH * 1.5,
    DAMAGE: base.DAMAGE * 3.5,
    SHIELD: base.SHIELD * 3,
    REGEN: base.REGEN * 1.5,
  },
  TURRETS: [
    {
      /*********  SIZE               X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 180, 360, 0],
      TYPE: ["smasherBody"],
    },
    {
      POSITION: [15, 0, 0, 180, 360, 1],
      TYPE: ["smasherBody"],
    },
    {
      POSITION: [12, 0, 0, 180, 360, 1],
      TYPE: ["weakAutoSmasherTurret"],
    },
  ],

  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.greaterReload, g.greaterDamage, g.minorRecoil]),
        TYPE: "smasherBullet",
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, -10, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.greaterReload, g.greaterDamage, g.minorRecoil]),
        TYPE: "smasherBullet",
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.greaterReload, g.greaterDamage, g.minorRecoil]),
        TYPE: "smasherBullet",
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, -10, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.greaterReload, g.greaterDamage, g.minorRecoil]),
        TYPE: "smasherBullet",
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.greaterDamage, g.minorRecoil]),
        TYPE: "smasherBullet",
      },
    },
    {
      POSITION: [15, 18, 0.6, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.pounder, g.greaterDamage, g.minorRecoil]),
        TYPE: "swarm",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
    {
      POSITION: [13, 7.5, 0.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: "swarm",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
    {
      POSITION: [13, 7.5, 0.6, 0, 0, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: "swarm",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
    {
      POSITION: [13, 7.5, 0.6, 0, 0, -120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: "swarm",
        STAT_CALCULATOR: statnames.swarm,
      },
    },
  ],
};
Class.mechanistHandSaw1 = {
  PARENT: ["genericTank"],
  LABEL: "",
  BODY: {
    FOV: 0,
  },
  COLOR: "darkGrey",
  SHAPE: [
    [-1.75, 0],
    [1, -1],
    [1, 1],
  ],
};
Class.mechanistHand1 = {
  PARENT: ["genericTank"],
  LABEL: "",
  BODY: {
    FOV: 1.7,
  },
  COLOR: "grey",
  SHAPE: [
    [-1.75, 0],
    [1, -1],
    [1, 1],
  ],
  CONTROLLERS: ["nearestDifferentMaster"],
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 12, 0, 0, 0],
    },
    {
      POSITION: [20, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.skimmer]),
        TYPE: "missile",
        STAT_CALCULATOR: statnames.sustained,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [14, 0, 0, 0, 0, 1],
      TYPE: "mechanistHandSaw1",
    },
    {
      POSITION: [22, 0, 0, 0, 0, 0],
      TYPE: "mechanistHandSaw1",
    },
    ],
};
Class.mechanist = {
PARENT: "genericTank",
  LABEL: "Mechanist",
  SPECIAL_EFFECT: "Legend",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.75,
    HEALTH: base.HEALTH * 1.25,
    DAMAGE: base.DAMAGE * 1.75,
    SHIELD: base.SHIELD * 2.5,
    REGEN: base.REGEN * 1.25,
  },
  GUNS: [
    {
      POSITION: [1.4, 15, 1, 14.8, 0, 180, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
        TYPE: "autoSmasherMinion",
        MAX_CHILDREN: 1,
        INDEPENDENT: true,
      },
    },
    {
      POSITION: [15.2, 4, 1, 0, 0, 180, 1.5],
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 144, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.lesserDamage]),
        TYPE: "smasherMinion",
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 216, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.lesserDamage]),
        TYPE: "smasherMinion",
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE    X       Y     ANGLE    ARC */
      POSITION: [17, 17, 17, 15, 180, 1],
      TYPE: ["mechanistHand1", { COLOR: 13 }],
    },

    {
      POSITION: [17, 17, -17, -15, 180, 1],
      TYPE: ["mechanistHand1", { COLOR: 13 }],
    },
    {
      POSITION: [23, 0, 0, 30, 0, 0],
      TYPE: "smasherBody",
    },
    {
      POSITION: [15, 0, 0, 180, 180, 1],
      TYPE: "smasherBody",
    },
    {
      POSITION: [100, 0, 0, 30, 0, 0],
      TYPE: "hexaAutoRingIF",
    },
  ],
};
//TANKS
Class.guardSpawner = {
  PARENT: ["genericTank"],
  LABEL: "Guard Spawner",
  DANGER: 7,

  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: 1.2,
  },
  MAX_CHILDREN: 5,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4.5, 0, 0, 0, 360, 1],
      TYPE: ["egg", { INDEPENDENT: true}],
    },
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10.5, 1, 10.5, 0, 90, 0],
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyFactory,
          g.greaterSize,
          g.lesserHealth,
        ]),
        TYPE: "fullAutoGuardMinion",
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 90, 0],
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10.5, 1, 10.5, 0, 270, 0],
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyFactory,
          g.lesserHealth,
          g.greaterSize,
        ]),
        TYPE: "bansheeGuardMinion",
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 270, 0],
    },
  ],
};
Class.protectorSpawner = {
  PARENT: ["genericTank"],
  LABEL: "Protector Spawner",
  DANGER: 7,
  SHAPE: 4,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: 1.2,
  },
  MAX_CHILDREN: 4,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 0, 0, 0, 360, 1],
      TYPE: ["square", { INDEPENDENT: true}],
    },
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 11.5, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1.2, 13.5, 1, 14.8, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyFactory,
          g.pounder,
          g.greaterSize,
          g.halfHealth,
        ]),
        TYPE: "beeCruiserProtectorMinion",
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 13.5, 1, 8, 0, 0, 0],
    },
  ],
};
Class.keeperSpawner = {
  PARENT: ["genericTank"],
  LABEL: "Keeper Spawner",
  DANGER: 7,
  SHAPE: 3,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: 1.2,
  },
  MAX_CHILDREN: 3,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: ["triangle", { INDEPENDENT: true}],
    },
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10.5, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1.2, 12.5, 1, 14.8, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.babyFactory,
          g.pounder,
          g.destroyer,
          g.lesserReload,
          g.minorHealth,
        ]),
        TYPE: ["overBasicKeeperMinion", { GROWTH_FACTOR: 2 }],
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12.5, 1, 8, 0, 0, 0],
    },
  ],
};
Class.sentinelSpawner = {
  PARENT: ["genericTank"],
  LABEL: "Sentinel Spawner",
  DANGER: 7,
  SHAPE: 5,
  STAT_NAMES: statnames.drone,
  BODY: {
    FOV: 1.2,
  },
  MAX_CHILDREN: 2,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.6, 0, 0, 0, 360, 1],
      TYPE: ["pentagon", { INDEPENDENT: true}],
    },
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 13.5, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1.2, 15.5, 1, 14.8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.pounder,
          g.destroyer,
          g.superHealth,
          g.minorDamage,
          g.lesserReload,
          g.greaterSize,
        ]),
        TYPE: ["crossbowSentinelMinion", { GROWTH_FACTOR: 1.5 }],
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 15.5, 1, 8, 0, 0, 0],
    },
  ],
};
Class.centurionSpawner = {
  PARENT: ["genericTank"],
  LABEL: "Centurion Spawner",
  DANGER: 7,
  SHAPE: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.2,
  },
  MAX_CHILDREN: 1,
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: ["hexagon", { INDEPENDENT: true, COLOR: 14 }],
    },
  ],
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 14, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 16, 1, 15.5, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.pounder,
          g.destroyer,
          g.doubleHealth,
          g.greaterHealth,
         // g.greaterReload,
        ]),
        TYPE: "mortarCenturionMinion",
        STAT_CALCULATOR: statnames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 15, 1, 8, 0, 0, 0],
    },
  ],
};

//Other
Class.enemy = {
  PARENT: ["genericTank"],
  SIZE: 10,
  DANGER: 7,
  GIVE_KILL_MESSAGE: true,
  SKILL_CAP: [
    15, //reload
    15, //Penetration
    15, //bullet hp
    15, //bullet dmg
    15, //bullet spd
    15, //shield
    15, //body dmg
    15, // body hp
    15, //shield regen
    15, //body speed
  ],
  SKILL: skillSet({
    rld: 0, //reload
    dam: 0, //bullet damage
    pen: 0, //bullet penetration
    str: 0, //bullet health
    atk: 0, //bullet speed
    spd: 0, //body damage
    hlt: 0, //max health
    shi: 0, //shield capacity
    rgn: 0, //shield regeneration
    mob: 0, //movement speed
  }),
  DRAW_HEALTH: true,
};

Class.JJdeveloper = {
    PARENT: "genericTank",
    LABEL: "JJ's Test Page",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    DRAW_HEALTH: true,
    IGNORE_COLLISION: true,
    INVISIBLE: [0, 0],
    COLOR: "darkGrey",
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: 6,
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
        POSITION: [18, 10, -1.4, 0, -4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
              POSITION: [20, 10, -1.4, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.JJbosses = {
    PARENT: "genericTank",
    LABEL: "Fragmented Bosses",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    DRAW_HEALTH: true,
    IGNORE_COLLISION: true,
    INVISIBLE: [0, 0],
    COLOR: "#ff9900",
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: 6,
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
        POSITION: [18, 10, -1.4, 0, -4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
              POSITION: [20, 10, -1.4, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.JJTanks = {
    PARENT: "genericTank",
    LABEL: "Fragmented Tanks",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    DRAW_HEALTH: true,
    IGNORE_COLLISION: true,
    INVISIBLE: [0, 0],
    COLOR: "#ff9900",
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: 6,
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
        POSITION: [18, 10, -1.4, 0, -4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            },
        },
      {
              POSITION: [20, 10, -1.4, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.greaterDamage]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.JJdeveloper.UPGRADES_TIER_0 = ["developer", "JJTanks"]
Class.JJTanks.UPGRADES_TIER_0 = ["mechanist", "conductor", ["mechanist", "conductor"]]