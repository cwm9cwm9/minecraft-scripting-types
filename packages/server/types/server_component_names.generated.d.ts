declare const enum MinecraftComponent {
    /**
     * This component controls the Attack Damage attribute from the entity. It allows you to change the current minimum and maximum values. Once the changes are applied, the current attack of the entity will be reset to the minimum specified. With the minimum and maximum changed to the values specified. Any buffs or debuffs will be left intact.
     */
    Attack = "minecraft:attack",
    /**
     * Controls the collision box of the entity. When changes to the component are applied the entity's collision box is immediately updated to reflect the new dimensions. WARNING: If the change of the collision box dimensions would cause the entity to be inside a block, the entity might become stuck there and start suffocating.
     */
    CollisionBox = "minecraft:collision_box",
    /**
     * Defines an array of damages and how the entity reacts to them - including whether the entity ignores that damage or not. Currently Minecraft triggers can't be properly serialized so any existing triggers will be completely replaced when applyComponentChanges().
     */
    DamageSensor = "minecraft:damage_sensor",
    /**
     * Defines the loot table the entity uses to defines its equipment. Once the changes are applied, the equipment is re-rolled and a new set of equipment is chosen for the entity.
     */
    Equipment = "minecraft:equipment",
    /**
     * Defines how many and what items the entity can be equipped with.
     */
    Equippable = "minecraft:equippable",
    /**
     * Controls the entity's explosion, timer until the explosion, and whether the timer is counting down or not.
     */
    Explode = "minecraft:explode",
    /**
     * Defines how the entity can be healed by the player. This doesn't control how much health the entity can have; you must use the Health component for that instead.
     */
    Healable = "minecraft:healable",
    /**
     * Defines the current and maximum possible health of the entity. Upon applying the component back to the entity the health will change. If it reaches 0 or below the entity will die.
     */
    Health = "minecraft:health",
    /**
     * Defines the ways the player can interact with the entity to which this component is applied.
     */
    Interact = "minecraft:interact",
    /**
     * Defines the entity's inventory (size, restrictions, etc.). Currently this does not allow changing the entity's inventory contents.
     */
    Inventory = "minecraft:inventory",
    /**
     * Makes the entity look at another entity. Once applied, if an entity of the specified type is nearby and can be targeted the entity will turn towards it.
     */
    LookAt = "minecraft:lookat",
    /**
     * Nameable component describes an entity's ability to be named using a nametag and whether the name shows up or not once applied. Additionally, scripting allows setting the name of the entity directly with the property 'name'.
     */
    Nameable = "minecraft:nameable",
    /**
     * This component allows you to control an entity's current position in the world. Once applied the entity will be teleported to the new position specified.
     */
    Position = "minecraft:position",
    /**
     * This component allows you to control an entity's current rotation in the world as well as the entity's head rotation. Once applied, the entity will be rotated as specified.
     */
    Rotation = "minecraft:rotation",
    /**
     * Defines the entity's ranged attacks. This doesn't allow the entity to use a ranged attack: it only defines what kind of projectile it shoots.
     */
    Shooter = "minecraft:shooter",
    /**
     * Controls the entity's ability to spawn an entity or an item. This is similar to the chicken's ability to lay eggs after a set amount of time.
     */
    SpawnEntity = "minecraft:spawn_entity",
    /**
     * This controls the entity's ability to teleport itself (similar to the Enderman). If you wish to teleport the entity once use the Position component instead.
     */
    Teleport = "minecraft:teleport"
    }