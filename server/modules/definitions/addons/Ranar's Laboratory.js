
const {
  combineStats,
  skillSet,
  makeAuto,
  makeDeco,
  makeOver,
  makeGuard,
  makeBird,
  makeRadialAuto,
  weaponArray,
  makeTurret,
  makeRelic,
  makeRare,
  makeCrasher,
  makeLaby,
  addAura,
  newWeapon,
  menu,
  LayeredBoss,
} = require("../facilitators.js");
const {
  base,
  statnames,
  dfltskl,
  smshskl,
  basePolygonDamage,
  basePolygonHealth,
} = require("../constants.js");
const g = require("../gunvals.js");g.minorReload = { reload: 2.5 };
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

Class.flingerSymbol = makeDeco(-3)
Class.autoTrap = makeAuto("trap", "Auto-Trap", {size: 7.5, type: 'droneAutoTurret'});
Class.autoTrap.BODY.RECOIL_MULTIPLIER = 0;

Class.bang = {
  PARENT: ["genericTank"],
  SHAPE: 3,
  FACING_TYPE: ["spin", {speed: -0.04}],
  COLOR: 16,
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          g.destroyer,
          g.annihilator,
          g.bang,
          g.uberHealth,
          g.uberDensity,
          g.halfRange,
         // g.superDamage,
          g.minorSpeed,
          g.minorSpeed,
          g.minorSpeed,
          g.superPenetration,
        ]),
        TYPE: [
          "bullet",
          {
            IGNORE_COLLISION: true,
            MOTION_TYPE: "fastgrow",
            INTANGIBLE: true,
          },
        ],
      },
    },
  ],
};
Class.bounce = {
  PARENT: ["genericTank"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bounce, g.doubleReload]),
        TYPE: ["bullet", { ALPHA: 0 }],
      },
    },
  ],
};
Class.lesserBounce = {
  PARENT: ["genericTank"],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1, 0, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bounce, g.doubleReload, g.halfRecoil]),
        TYPE: ["bullet", { ALPHA: 0 }],
      },
    },
  ],
};
Class.eyePart1 = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: 0,
  SIZE: 1,
  COLOR: 18,
};

Class.eyePart2 = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: 0,
  SIZE: 1,
  COLOR: 19,
};

Class.evilEyePart1 = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: 0,
  SIZE: 1,
  COLOR: 9,
};

Class.evilEyePart2 = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: 0,
  SIZE: 1,
  COLOR: 8,
};
Class.eye = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: -2,
  SIZE: 1,
  COLOR: 8,
  TURRETS: [
    {
      POSITION: [4.5, 0, 0, 0, 360, 1],
      TYPE: ["eyePart1"],
    },
    {
      POSITION: [2, 0, 0, 0, 360, 1],
      TYPE: ["eyePart2"],
    },
  ],
};

Class.evilEye = {
  PARENT: ["genericTank"],
  LABEL: "",
  SHAPE: -2,
  SIZE: 1,
  COLOR: 19,
  TURRETS: [
    {
      POSITION: [4.5, 0, 0, 0, 360, 1],
      TYPE: ["evilEyePart1"],
    },
    {
      POSITION: [2, 0, 0, 0, 360, 1],
      TYPE: ["evilEyePart2"],
    },
  ],
};
Class.flingerTrap = {
  PARENT: "trap",
  INDEPENDENT: true,
  BODY: {
  FOV: 0.5,
    },
  CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 0, 1],
            TYPE: "lesserBounce"
        }
    ]
  }
Class.slingerSetTrap = {
  PARENT: "setTrap",
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
  FOV: 0.5,
    },
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 0, 1],
            TYPE: "lesserBounce"
        }
    ]
  }
Class.flingerAutoTrap = {
  PARENT: ["flingerTrap", "autoTrap"],
  }
Class.corruptchip = {
    PARENT: "sunchip",
  LABEL: "Corrupted Polygon",
    NECRO: [0, 3, 4, 5],
    SHAPE: -2
}
Class.experimenterTurret = {
  PARENT: ["genericTank"],
  LABEL: "Stationed Turret",
  TYPE: "minion",
  HITS_OWN_TYPE: "hard",
  FACING_TYPE: "smoothToTarget",
  HAS_NO_RECOIL: true,
  BODY: {
    FOV: 1,
    SPEED: 0,
    ACCELERATION: 0,
    HEALTH: 7.5,
    SHIELD: 0,
    DAMAGE: 1.55,
    RESIST: 1,
    PENETRATION: 1,
    RANGE: 100,
    DENSITY: 0.4,
    PUSHABILITY: 0,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 361, 0],
      TYPE: "dominationBody",
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },

    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.scientistTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, -5.5, 0, 0],
      
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },

    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17.5555, 8, 1, 0, 5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.single,
          
          
        ]),
        TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
      },
    },
    {
      POSITION: [5.45, 16.65, -1.25, 6.25, 0, 0, 0],
    },
  ],
};
Class.physicistTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
    
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.single]),
                TYPE: ["trap", {PERSISTS_AFTER_DEATH: true}],
            },
        },
    
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
Class.researcherTurret = {
  PARENT: ["experimenterTurret"],
  GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.single]),
                TYPE: ["swarm", {PERSISTS_AFTER_DEATH: true}],
            },
        },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
//Turrets
//Classes

//EXPERIMENTER BRANCH(new)
Class.experimenter = {
  PARENT: ["genericTank"],
  LABEL: "Experimenter",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  TOOLTIP: 'Right click to spawn a turret, then left click to control their aim!',
  MAX_CHILDREN: 3, 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25}
          
        ]),
        TYPE: ["experimenterTurret"],
        ALT_FIRE: true,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
Class.researcher = {
  PARENT: ["genericTank"],
  LABEL: "Researcher",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  TOOLTIP: 'Right click to spawn a turret, then left click to control their aim!',
  MAX_CHILDREN: 3, 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25}
          
        ]),
        TYPE: ["researcherTurret"],
        ALT_FIRE: true,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
Class.physicist = {
  PARENT: ["genericTank"],
  LABEL: "Physicist",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  TOOLTIP: 'Right click to spawn a turret, then left click to control their aim!',
  MAX_CHILDREN: 3, 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25}
          
        ]),
        TYPE: ["physicistTurret"],
        ALT_FIRE: true,
        SYNCS_SKILLS: true,
        DESTROY_OLDEST_CHILD: true,
      },
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
Class.scientist = {
  PARENT: ["genericTank"],
  LABEL: "Scientist",
  STAT_NAMES: statnames.mixed,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN:  3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15, 1, 10, 0, 0, 0],
    },

    {
      POSITION: [3, 17, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.3, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.setTrap,
          {speed: 0.25},
          
        ]),
        TYPE: ["scientistTurret"],
        ALT_FIRE: true,
        DESTROY_OLDEST_CHILD: true,
        SYNCS_SKILLS: true,
      },      
    },
    {
      POSITION: [3, 8, -1.8, 7.5, 0, 0, 0],
    },
  ],
};
//TRAPPER BRANCH

Class.flinger = {
    PARENT: ["genericTank"],
    LABEL: "Flinger",
    STAT_NAMES: statnames.trap,
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: ["flingerSymbol", { INDEPENDENT: true, COLOR: 16 }],
    },
  ],
    GUNS: [
        { 
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "flingerTrap",
                STAT_CALCULATOR: statnames.trap,
            },
        },
    ],
};
Class.autoFlinger = makeAuto("flinger")
Class.slinger = {
    PARENT: ["genericTank"],
    LABEL: "Slinger",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
  TURRETS: [
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: ["flingerSymbol", { INDEPENDENT: true, COLOR: 16 }],
    },
  ],
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                MAX_CHILDREN: 6,
                TYPE: "slingerSetTrap",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: "block"
            },
        },
    ],
};
//POUNDER BRANCH
Class.autoFlankGuard = makeAuto(Class.flankGuard, "Auto-Flank Guard");
//auto-flank guard branch
Class.fullAuto = makeAuto(Class.auto3, "Full-Auto");
Class.autoTrapGuard = makeAuto(Class.trapGuard, "Auto-Trap Guard");
Class.autoHexaTank = makeAuto(Class.hexaTank, "Auto-Hexa Tank");
Class.star = {

    PARENT: "genericTank",
    LABEL: "Star",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: 
        weaponArray([{
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            },
        }], 3)
    
    }
//star branch
Class.pulsar = {
    PARENT: "genericTank",
  LABEL: "Pulsar",
    BODY: {
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: 
        weaponArray([{
        
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }], 3)
    
}
Class.deathStar = {
    PARENT: "genericTank",
  LABEL: "Death-Star",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: 
        
        weaponArray([{
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20.5, 12, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20.5, 12, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder]),
                TYPE: "bullet"
            }
        }], 2)
    
}

Class.neutronStar = {
    PARENT: "genericTank",
  LABEL: "Neutron Star",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: 
        weaponArray([{
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pounder, g.destroyer]),
                TYPE: "bullet"
            }
        }], 3)
    
}
Class.autoStar = makeAuto(Class.star, "Auto-Star")
//destroyer branch
Class.retaliator = {
    PARENT: ["genericTank"],
    LABEL: "Retaliator",
  SKILL_CAP: [
  4, //reload
  10, //Penetration
  10, //bullet hp
  10, //bullet dmg
  10, //bullet spd
  9, //shield
  9, //body dmg
  9, // body hp
  9, //shield regen
  9, //body speed
],
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                g.basic,
                g.pounder,
                g.destroyer,
          {reload: 1.75},
                ]),
                TYPE: "bullet",
                MAX_CHILDREN: 1,
            },
        },
    {
      POSITION: [20, 20, 0.001, 0, 0, 0, 0],
    },
    ],
};
//TRAPPER BRANCH

//SMASHER BRANCH

Class.poltergeist = {
  PARENT: ["genericSmasher"],
  LABEL: "Poltergeist",
  DANGER: 7,
 /* BODY: {
    ACCELERATION: base.ACCEL + 0.1,
    SPEED: base.SPEED * 0.9,
    HEALTH: base.HEALTH * 1.8,
    DAMAGE: base.DAMAGE * 1.2,
    SHIELD: base.SHIELD * 1.1,
    REGEN: base.REGEN * 1.3,
    PENETRATION: base.PENETRATION + 0.3,
    FOV: base.FOV + 0.1,
    DENSITY: base.DENSITY + 0.25,
    PUSHABILITY: 3,
  },*/
  INVISIBLE: [0.006, 0.003],
  INTANGIBLE: true,
  IGNORE_COLLISION: true,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: "smasherBody",
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 0, 1],
      TYPE: ["eye", {MIRROR_MASTER_ANGLE: true, INDEPENDENT: true}],
    },
  ],
}
Class.auraSmasherGen = addAura(2, 2, 0.3);
Class.smashersphere = {
    PARENT: "genericSmasher",
    LABEL: "Smashersphere",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraSmasherGen"
        }
    ]
}
Class.bouncer = {
    PARENT: "genericSmasher",
    LABEL: "Bouncer",
  TOOLTIP: "Left click to leap.",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [10, 0, 0, 0, 0, 1],
            TYPE: "bounce"
        }
    ]
}
Class.banger = {
    PARENT: "genericSmasher",
    LABEL: "Banger",
  TOOLTIP: "Left click to create an explosion.",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [12, 0, 0, 0, 0, 1],
            TYPE: "bang"
        }
    ]
}
Class.bodyGuard = {
  PARENT: ["basic", "smasher"],
  LABEL: "Body Guard",
  GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl]
           }
Class.collider = {
    PARENT: "genericSmasher",
    LABEL: "Collider",
    DANGER: 6,
    FACING_TYPE: ["spin", { speed: 0.1, independent: true }],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, 55, 0, 120, 360, 0],
            TYPE: ["smasher", { BODY: {HEALTH: 1e5}}],
            VULNERABLE: true
        },
      {
            POSITION: [20, 55, 0, 240, 360, 0],
            TYPE: ["smasher", { BODY: {HEALTH: 1e5}}],
            VULNERABLE: true
        },
      {
            POSITION: [20, 55, 0, 360, 360, 0],
            TYPE: ["smasher", { BODY: {HEALTH: 1e5}}],
            VULNERABLE: true
        }
    ]
}
Class.impaler = {
    PARENT: "genericSmasher",
    LABEL: "Impaler",
    BODY: {
        SPEED: base.SPEED * 0.75,
        DAMAGE: base.DAMAGE * 1.5,
         HEALTH: base.HEALTH * 2.5,
      
    },
    TURRETS: [
        {
      POSITION: [20.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody", 
        },
        {
      POSITION: [20.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", {FACING_TYPE: ["spin", { speed: -0.05 }]}],
        },
    ],
}
//Legendary Classes

Class.interloper = {
  PARENT: ["genericTank"],
  LABEL: "Interloper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.5,
    HEALTH: base.HEALTH * 2,
    DAMAGE: base.DAMAGE,
    SHIELD: base.SHIELD * 1.5,
    REGEN: base.REGEN * 2,
  },
  GUNS: [
    {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    {
      POSITION: [5, 12, -1.3, 7, 0, 0, 0],
    },
  ],
};

Class.necroTyrant = {
  PARENT: ["genericTank"],
  LABEL: "Necro-Tyrant",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 2,
    HEALTH: base.HEALTH * 1.33,
    DAMAGE: base.DAMAGE * 1.33,
    SHIELD: base.SHIELD * 1.34,
    REGEN: base.REGEN * 2,
  },

  SHAPE: 0,
  MAX_CHILDREN: 32,
  GUNS: [
    {
      POSITION: [4, 9, 1.3, 8, 0, 35, 0],
    },
    {
      POSITION: [4, 9, 1.3, 8, 0, 179, 0],
    },
    {
      POSITION: [4, 9, 1.3, 8, 0, 107, 0],
    },
    {
      POSITION: [4, 9, 1.3, 8, 0, 323, 0],
    },
    {
      POSITION: [4, 9, 1.3, 8, 0, 251, 0],
    },
    {
      POSITION: [4, 9.5, 1.3, 8, 0, 60, 0],
    },
    {
      POSITION: [4, 9.5, 1.3, 8, 0, 180, 0.5],
    },
    {
      POSITION: [4, 9.5, 1.3, 8, 0, 300, 1],

    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],

    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
    },

    {
      POSITION: [13.2, 5.2, 1.4, 0, -5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, 5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, -5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
      },
    },
    {
      POSITION: [13.2, 5.2, 1.4, 0, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          {size: 2},
          {health: 2},
        ]),
        TYPE: ["corruptchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: statnames.necro,
      },
    },
  ],
};
Class.rebel = {
  PARENT: ["genericTank"],
  LABEL: "Rebel",
  STAT_NAMES: statnames.mixed,
    BODY: {
        ACCELERATION: base.ACCEL * 1.1,
        SPEED: base.SPEED * 1.75,
        HEALTH: base.HEALTH * 1.55,
        DAMAGE: base.DAMAGE * 1.55,
        PENETRATION: base.PENETRATION * 1.04,
        SHIELD: base.SHIELD * 1.55,
        REGEN: base.REGEN * 1.55,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY
    },
  GUNS: [
        {
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    {
      POSITION: [19, 8, 1, 0, -4, 152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 4, -152.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 157.5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, -180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.thruster,
          {damage: 1.5},
          {health: 1.5},
          {penetration: 1.5},
        ]),
        TYPE: "bullet",
      }, 
    },
  ],
  TURRETS: [
    {
      POSITION: [18, 0, 0, 0, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 90, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 180, 360, 0],
      TYPE: "spikeBody",
    },
    {
      POSITION: [18, 0, 0, 270, 360, 0],
      TYPE: "spikeBody",
    },
  ],
};
//Misc

//Enemies

//Bosses
Class.Ranardeveloper = {
    PARENT: "genericTank",
    LABEL: "Ranar's Test Page",
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
    COLOR: "teal",
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    SHAPE: 5.5,
    GUNS: weaponArray([
        {
            POSITION: [18, 8, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, g.doubleDamage]),
                TYPE: "developerBullet"
            }
        }
    ], 5 )
}
Class.RanarsTanks = {
    PARENT: "Ranardeveloper",
    LABEL: "Ranar's Tank Page",
}
Class.RanarsBosses = {
    PARENT: "Ranardeveloper",
    LABEL: "Ranar's Boss Page",
}
Class.RanarsAssets = {
    PARENT: "Ranardeveloper",
    LABEL: "Ranar's Asset Page",
}
Class.RanarsMisc = {
    PARENT: "Ranardeveloper",
    LABEL: "Ranar's Misc Page",
}
//Class.basic.UPGRADES_TIER_1.push("experimenter");
Class.experimenter.UPGRADES_TIER_2 = [
  "scientist",
  "researcher",
  "physicist",
  ]
Class.trapper.UPGRADES_TIER_2.push("flinger")
Class.flinger.UPGRADES_TIER_2 = ["slinger", "autoFlinger"]
Class.pounder.UPGRADES_TIER_2.push("star")
Class.flankGuard.UPGRADES_TIER_2.push("star", "autoFlankGuard")
Class.star.UPGRADES_TIER_3 = ["deathStar", "autoStar", "neutronStar", "pulsar", "mega3"]
Class.autoFlankGuard.UPGRADES_TIER_3 = ["fullAuto", "autoStar", "autoTrapGuard", "autoHexaTank"]
Class.destroyer.UPGRADES_TIER_3.push("neutronStar", "retaliator")
Class.hexaTank.UPGRADES_TIER_3.push("deathStar", "autoHexaTank")
Class.trapGuard.UPGRADES_TIER_3.push("autoTrapGuard")
Class.auto3.UPGRADES_TIER_3.push("fullAuto")
Class.hunter.UPGRADES_TIER_3.push("pulsar")
Class.smasher.UPGRADES_TIER_3.push("poltergeist", /*"smashersphere",*/ "collider", "bouncer", "banger", "bodyGuard", "impaler")
Class.Ranardeveloper.UPGRADES_TIER_0 = ["developer", "RanarsTanks"]
Class.RanarsTanks.UPGRADES_TIER_0 = ["experimenter", "interloper", "rebel", /*"necroTyrant"*/]