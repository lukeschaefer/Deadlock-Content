import { Character } from ".";

export const wrecker: Character = {
  "id": 48,
  "class_name": "wrecker",
  "name": "Wrecker",
  "lore": "When the Maelstrom  first hit New York, it didn’t just usher in a new age of mysticism to the world… it changed geopolitics.  From CIA employed seers identifying threats decades before they rise to power to occult pacts made in smoky backrooms;  countless wars and atrocities have been prevented that would otherwise have shaped history.  But that doesn’t mean there is no war… just that war has changed.\n\nParanormal Military Companies have risen to prominence.  These groups, using a combination of extra-planar creatures and various blood magics; have found ways to circumvent the guardrails established by the nation’s watchdog oracles, allowing them to function as proxies for nations seeking to wage war.\n\nWrecker is one such soldier.\n\nEmployed by Eldritch Tactical Solutions (a subsidiary of Fairfax Industries), Wrecker is an elite soldier of fortune with a reputation for doing dirty work that other PMC’s don’t have the stomach for.",
  "role": "Salvages scrap to create weapons",
  "playstyle": "Salvaging and scrapping for parts, Wrecker can disassemble troopers, crush foes with his Wrecking Ball, and capture all enemies in his Stasis Trap.",
  "player_selectable": true,
  "disabled": false,
  "in_development": true,
  "needs_testing": false,
  "assigned_players_only": false,
  "bot_selectable": false,
  "limited_testing": false,
  "complexity": 3,
  "readability": 0,
  "starting_stats": {
    "max_move_speed": 7,
    "sprint_speed": 0,
    "crouch_speed": 4.75,
    "move_acceleration": 4,
    "light_melee_damage": 63,
    "heavy_melee_damage": 116,
    "max_health": 550,
    "weapon_power": 0,
    "reload_speed": 1,
    "weapon_power_scale": 1,
    "proc_build_up_rate_scale": 1,
    "stamina": 3,
    "base_health_regen": 2,
    "stamina_regen_per_second": 0.2,
    "ability_resource_max": 0,
    "ability_resource_regen_per_second": 0,
    "crit_damage_received_scale": 1,
    "tech_duration": 1,
    "tech_range": 1
  },
  "collision_radius": 20,
  "collision_height": 80,
  "step_height": 32,
  "items": {
    "ability_climb_rope": 4261702459,
    "ability_innate1": 2207638101,
    "ability_innate2": 1443159618,
    "ability_innate3": 664285540,
    "ability_jump": 1466127517,
    "ability_mantle": 4109126631,
    "ability_slide": 2335418656,
    "ability_zip_line": 2573821048,
    "ability_zip_line_boost": 875395762,
    "signature1": 4062064977,
    "signature2": 208809857,
    "signature3": 3422822440,
    "signature4": 2493171901,
    "weapon_melee": 2697859853,
    "weapon_primary": 495487721
  },
  "item_slot_info": {
    "weapon_mod": {
      "max_purchase_for_tier": [6, 6, 6]
    },
    "armor": {
      "max_purchase_for_tier": [6, 6, 6]
    },
    "tech": {
      "max_purchase_for_tier": [6, 6, 6]
    }
  },
  "purchase_bonuses": {
    "weapon_mod": [
      {
        "tier": 1,
        "value": "6"
      },
      {
        "tier": 2,
        "value": "10"
      },
      {
        "tier": 3,
        "value": "14"
      },
      {
        "tier": 4,
        "value": "18"
      }
    ],
    "armor": [
      {
        "tier": 1,
        "value": "11"
      },
      {
        "tier": 2,
        "value": "14"
      },
      {
        "tier": 3,
        "value": "17"
      },
      {
        "tier": 4,
        "value": "20"
      }
    ],
    "tech": [
      {
        "tier": 1,
        "value": "4"
      },
      {
        "tier": 2,
        "value": "8"
      },
      {
        "tier": 3,
        "value": "12"
      },
      {
        "tier": 4,
        "value": "16"
      }
    ]
  },
  "level_info": {
    "1": {
      "required_gold": 0,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "10": {
      "required_gold": 5200,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "11": {
      "required_gold": 6000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "12": {
      "required_gold": 7500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "13": {
      "required_gold": 8000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "14": {
      "required_gold": 9000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "15": {
      "required_gold": 9700,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "16": {
      "required_gold": 10500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "17": {
      "required_gold": 12000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "18": {
      "required_gold": 13000,
      "use_standard_upgrade": true
    },
    "19": {
      "required_gold": 14000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "2": {
      "required_gold": 400,
      "bonus_currencies": [
        "EAbilityUnlocks",
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "20": {
      "required_gold": 15000,
      "use_standard_upgrade": true
    },
    "21": {
      "required_gold": 16000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "22": {
      "required_gold": 18000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "23": {
      "required_gold": 20000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "24": {
      "required_gold": 22000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "25": {
      "required_gold": 24000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "26": {
      "required_gold": 27000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "27": {
      "required_gold": 30000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "28": {
      "required_gold": 33000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "29": {
      "required_gold": 36000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "3": {
      "required_gold": 800,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "30": {
      "required_gold": 39000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "31": {
      "required_gold": 42000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "32": {
      "required_gold": 45000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "33": {
      "required_gold": 48000,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "4": {
      "required_gold": 1200,
      "use_standard_upgrade": true
    },
    "5": {
      "required_gold": 1500,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "6": {
      "required_gold": 2200,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    },
    "7": {
      "required_gold": 3000,
      "bonus_currencies": [
        "EAbilityUnlocks"
      ],
      "use_standard_upgrade": false
    },
    "8": {
      "required_gold": 3500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": false
    },
    "9": {
      "required_gold": 4500,
      "bonus_currencies": [
        "EAbilityPoints"
      ],
      "use_standard_upgrade": true
    }
  },
  "stealth_speed_meters_per_second": 4,
  "footstep_sound_travel_distance_meters": 20,
  "step_sound_time": 0.33,
  "color_ui": [127, 45, 177],
  "color_glow_friendly": [255, 239, 215],
  "color_glow_enemy": [255, 0, 0],
  "color_glow_team1": [231, 182, 89],
  "color_glow_team2": [91, 121, 230],
  "standard_level_up_upgrades": {
    "MODIFIER_VALUE_BASE_BULLET_DAMAGE_FROM_LEVEL": 1.241429,
    "MODIFIER_VALUE_BASE_HEALTH_FROM_LEVEL": 41,
    "MODIFIER_VALUE_BASE_MELEE_DAMAGE_FROM_LEVEL": 2.671429,
    "MODIFIER_VALUE_BULLET_ARMOR_DAMAGE_RESIST": 0,
    "MODIFIER_VALUE_TECH_DAMAGE_PERCENT": 0
  },
  "hero_shop_stat_display": {
    "weapon_stats_display": {}
  },
  "selection_image": "panorama:\"file://{images}/heroes/wrecker.psd\"",
  "icon_image_small": "panorama:\"file://{images}/heroes/wrecker_sm.psd\"",
  "minimap_image": "panorama:\"file://{images}/heroes/wrecker_mm.psd\"",
  "icon_hero_card": "panorama:\"file://{images}/heroes/wrecker_card.psd\"",
  "top_bar_image": "panorama:\"file://{images}/hud/hero_portraits/wrecker_hud.psd\"",
  "images": {
    "portrait": "https://assets.deadlock-api.com/images/heroes/wrecker_psd.png",
    "card": "https://assets.deadlock-api.com/images/heroes/wrecker_card_psd.png",
    "top_bar": "https://assets.deadlock-api.com/images/heroes/wrecker_hud_psd.png",
    "minimap": "https://assets.deadlock-api.com/images/heroes/wrecker_mm_psd.png",
    "small": "https://assets.deadlock-api.com/images/heroes/wrecker_sm_psd.png"
  }
};
