const completeCardsData = [
  // MAJOR ARCANA (0-21)
  {
    "id": 0,
    "name": "The Wanderer",
    "subtitle": "(formerly The Fool)",
    "image": "cards/images/TheWanderer.png",
    "keywords": ["journey", "trust", "beginning", "courage", "unknown"],
    "description": "A fox perches on the edge of a mossy cliff, eyes fixed on a glowing star that cuts through the indigo night. At her feet lies a weathered, crumpled map — unreadable, or perhaps no longer needed. Slung across her back is a small bindle bag, tied tight with mystery. She does not move yet. But she is listening. The stillness before the first step is sacred, and she knows that the path will not appear until she dares to walk it.",
    "upright": "The Wanderer represents the beginning of a new journey — one that demands courage, trust, and surrender to the unknown. This card asks you to step forward even if the way ahead is unclear. Like the fox, you are guided by something deeper than logic. You may not have the full picture, but your instincts are sharp, and your spirit is ready. This is a moment of becoming, a quiet rebellion against certainty in favor of truth. Say yes to the invitation life is offering you, even if it comes without a map.",
    "reversed": "When The Wanderer appears reversed, it may signal hesitation, avoidance, or a refusal to begin. You might be mistaking stillness for safety, or mistaking recklessness for bravery. There is a difference between moving with presence and running without direction. This card asks: Are you leaping from alignment, or from fear? You don't need to know everything — but you do need to be honest about why you're moving, or why you're not."
  },
  {
    "id": 1,
    "name": "The Sorceress",
    "subtitle": "(formerly The Magician)",
    "image": "cards/images/TheSorceress.png",
    "keywords": ["power", "manifestation", "intention", "magic", "creation"],
    "description": "Under a sky glittering with stars, a black cat lowers her paw toward the earth, tracing a glowing spiral into the soil. The air hums with ancient magic. Around her, the wildflowers hold their breath. She doesn't need an altar — her body is the ritual, her focus the spell. She is aligned. She knows her power. And she chooses to wield it with intention.",
    "upright": "The Sorceress is a card of embodied magic, clarity, and creative will. It invites you to root into your personal power and remember: you already hold what you need. This card signals a time to act, speak, shape, and manifest — but not from ego. From alignment. The cat teaches you to move deliberately, to trust the unseen, to know that every gesture sends a ripple. What you channel now can become something real. Just remember to ground your magic in truth.",
    "reversed": "When reversed, The Sorceress may reveal scattered energy, self-doubt, or misaligned intention. You might be questioning your power or grasping at control instead of creating from the center. This card calls you back to presence. Are you casting from clarity, or from fear? Have you forgotten your own influence? You don't need to force what wants to flow. Real power is quiet, grounded, and precise. Return to the spiral. Begin again from the inside out."
  },
  {
    "id": 2,
    "name": "The High Priestess",
    "image": "cards/images/TheHighPriestess.png",
    "keywords": ["intuition", "wisdom", "mystery", "sacred", "inner knowing"],
    "description": "A white hare sits still beside a moonlit pool, her fur etched with ancient runes. A golden scroll rests at her feet, sealed and silent. A sheer white veil drifts across her ears like mist, catching the light of the full moon above. She says nothing, yet she sees everything. The High Priestess does not speak to be heard. She listens to what most ignore — the subtle, the sacred, the unseen.",
    "upright": "The High Priestess is a guide of inner wisdom, sacred knowledge, and deep intuition. She calls you to turn inward, to listen before you speak, and to trust what you feel even if it defies logic. There is power in the pause, in the questions that haven't been answered yet. Like the hare, you are invited to hold stillness and sensitivity as strengths. You already hold the scroll — the answers are within. Trust yourself. The mystery is unfolding.",
    "reversed": "When reversed, The High Priestess may point to disconnection from intuition, ignoring your inner knowing, or fear of what lies beneath the surface. You may be rushing to act when what's really needed is stillness and trust. Or you might be hiding from your own depth, afraid of what it will reveal. This card urges gentle return. Quiet the noise. Hold space for the unknown. What you seek is not lost — it's simply waiting for you to get quiet enough to hear it."
  },
  {
    "id": 3,
    "name": "The Mother",
    "subtitle": "(formerly The Empress)",
    "image": "cards/images/TheMother.png",
    "keywords": ["creation", "nurture", "abundance", "embodiment", "fertility"],
    "description": "A lioness rests in the tall grass, her eyes steady and full of knowing. Three cubs curl around her, safe in the warmth of her body and the quiet command of her presence. She wears a crown of antlers and blooming flowers — symbols of both wild instinct and nurtured beauty. Behind her, a golden sun-shaped shield leans against the earth. She is the pulse of life, both fierce and tender. She creates, protects, and sustains.",
    "upright": "The Mother is a card of creation, embodiment, and deep nourishment. She invites you to root into your own cycles of fertility — whether literal, creative, emotional, or spiritual. This is a time to honor what you are growing. Tend to it with devotion. Let your softness be a strength, your boundaries a gift. The Mother offers abundance that doesn't clamor, beauty that doesn't seek approval. You are enough. What you carry is sacred. Let it flourish.",
    "reversed": "Reversed, The Mother may speak to depletion, overgiving, or disconnection from your creative self. You may be pouring energy into others without replenishing your own well. Or perhaps you doubt the worth of what you are bringing to life. This card gently calls you home. What nurtures you? What needs to be reclaimed? Let yourself receive. You do not need to hold everything. You are allowed to rest. You are allowed to bloom in your own time."
  },
  {
    "id": 4,
    "name": "The Emperor",
    "image": "cards/images/TheEmperor.png",
    "keywords": ["structure", "leadership", "authority", "protection", "stability"],
    "description": "A great stag stands within a circle of stones, muscles taut beneath his fur, antlers like ancient trees reaching toward the sky. In one hoof he holds a carved wooden staff — not a weapon, but a symbol of presence, power, and protection. The forest around him glows softly with golden light, a throne not made but remembered. He is the guardian of order, of right timing, of what must be held with steadiness.",
    "upright": "The Emperor speaks of structure, leadership, and the sacred role of holding steady ground. He is the part of you that takes responsibility, that builds the container strong enough to hold your dreams. This card invites you to lead — with wisdom, not ego. With integrity, not control. The stag teaches that true authority is earned, not taken. Stand tall in what you believe. Create boundaries that bless, not block. Your strength is a gift when it is rooted in care.",
    "reversed": "Reversed, The Emperor may reflect rigidity, overcontrol, or disconnection from the heart of your power. You might be clinging to outdated structures or mistaking dominance for stability. Or perhaps you're struggling to own your authority, doubting your right to lead. This card asks: what kind of ruler are you to yourself? Can you create space that feels safe, not suffocating? Leadership begins within. Step into it with intention, not fear."
  },
  {
    "id": 5,
    "name": "The Hierophant",
    "image": "cards/images/TheHierophant.png",
    "keywords": ["tradition", "wisdom", "teaching", "lineage", "spirituality"],
    "description": "A majestic elephant stands beneath a waning crescent moon, eyes steady and ancient. A long scroll unfurls in the air around her, its parchment inscribed with forgotten words and remembered truths. Flowers bloom quietly at her feet, honoring the slow, deliberate power she carries. She is the guardian of knowledge passed down through time, a bridge between the earth and the stars. She does not speak loudly, but when she does, the forest listens.",
    "upright": "The Hierophant speaks to tradition, spiritual lineage, and the wisdom of sacred structures. She invites you to connect with the teachings that have shaped you — mentors, rituals, ancestors, and the deeper truths that hold your life together. This is a time to seek meaning through study, through faith, or through the guidance of someone wise. The elephant reminds you that not all knowledge is new. Sometimes, the next step is to remember what you already know. Anchor yourself in something timeless.",
    "reversed": "Reversed, The Hierophant may reflect a break from tradition, a questioning of authority, or a call to find your own spiritual voice. You may be feeling confined by outdated beliefs or inherited expectations. This card invites you to examine what wisdom still serves — and what no longer fits. You do not have to burn down the temple to find your truth. You only need to step outside long enough to remember the sound of your own soul. Then choose your own sacred path."
  },
  {
    "id": 6,
    "name": "The Lovers",
    "image": "cards/images/TheLovers.png",
    "keywords": ["choice", "connection", "intimacy", "harmony", "alignment"],
    "description": "Two foxes meet in the hush of night, their noses nearly touching. One is bathed in soft moonlight, bright and curious. The other lingers in shadow, deep-eyed and steady. Around them bloom red flowers, pulsing with life, while a crescent moon rises above — a witness to the meeting of dualities. This is more than romance. This is reflection. A sacred choice. A call to intimacy, not just with another, but with the parts of yourself you are learning to love.",
    "upright": "The Lovers invites you into alignment — with your values, your desires, and your connections. It speaks of sacred partnership, but also of inner harmony. Something in your life is asking for wholehearted presence. Whether in a relationship or a decision, this card calls you to choose with clarity and heart. The foxes remind you: true connection honors both light and shadow. There is beauty in contrast, power in mutual devotion. Choose not what is easiest, but what is truest.",
    "reversed": "When reversed, The Lovers may signal misalignment, confusion, or an avoidance of intimacy. You may be facing a choice but unsure of what truly resonates. Or perhaps a relationship is reflecting back the parts of yourself you struggle to accept. This card asks: where are you out of integrity with yourself? Reconnection begins with honesty. Look gently at what you're resisting. Sometimes the most loving act is choosing yourself first — not out of separation, but out of sacred self-respect."
  },
  {
    "id": 7,
    "name": "The Hunt",
    "subtitle": "(formerly The Chariot)",
    "image": "cards/images/TheHunt.png",
    "keywords": ["purpose", "drive", "focus", "momentum", "determination"],
    "description": "A black panther crouches low, golden bow drawn, eyes locked on a star burning bright in the night sky. Every muscle is poised, yet not rushed. Flowers and mushrooms bloom quietly at her feet, guardians of a world she moves through with silent precision. She is not chasing for the sake of motion. She knows exactly what she's after. And she knows when to strike.",
    "upright": "The Hunt is a card of purpose, drive, and fierce alignment. It asks: What are you truly pursuing — and are you prepared to meet it with your whole being? This is not about forcing outcomes. This is about moving with intention. The panther reminds you that true momentum comes from inner stillness. When your aim is clear, your steps become sacred. Let your desire lead, but not your chaos. This is your moment to move forward with focus, clarity, and conviction.",
    "reversed": "Reversed, The Hunt may reflect misdirection, scattered energy, or being pulled off course by distractions or ego. You may feel like you're moving fast but getting nowhere. This card urges you to pause and realign. Are you hunting something that isn't really yours? Are you acting from instinct, or impulse? There is no shame in recalibrating. Drop the bow for a moment. Reclaim your center. When you move from soul, the target reveals itself."
  },
  {
    "id": 8,
    "name": "Strength",
    "image": "cards/images/Strength.png",
    "keywords": ["courage", "compassion", "resilience", "inner power", "grace"],
    "description": "A great gorilla sits in quiet focus, a thick braided rope resting in her hands. Fire glows at her feet, but she does not flinch. Her gaze is steady — not fierce, but resolute. She does not perform her strength, nor does she need to. She simply holds it, as naturally as she breathes. Around her, wildflowers bloom through the underbrush. She is the embodiment of inner mastery: soft where she chooses, unmovable where she must be.",
    "upright": "Strength is the union of power and compassion, will and softness. This card invites you to hold your ground with grace, to meet challenges with presence rather than force. True strength isn't about domination — it's about knowing when to yield and when to stay rooted. The rope in her hands reminds you: restraint can be sacred. The fire at her feet speaks to your passion, but also to your ability to hold it wisely. You are stronger than you think, especially when you lead with heart.",
    "reversed": "When reversed, Strength may reflect inner unrest, emotional volatility, or resistance to your own vulnerability. You may feel the need to control, or fear that softness equals weakness. This card encourages you to explore where your power feels unsafe or unbalanced. Are you lashing out, or shutting down? Either way, the answer lies in self-trust. Reclaim your center. You do not need to prove your strength — you only need to remember it."
  },
  {
    "id": 9,
    "name": "The Hermit",
    "image": "cards/images/TheHermit.png",
    "keywords": ["solitude", "reflection", "wisdom", "inner light", "discernment"],
    "description": "A snow leopard pauses on a quiet forest path, cloaked in the stillness of night. In one paw she holds an oil lantern, casting a golden glow against her pale fur. The stars above echo her silence — vast, watchful, and unhurried. She is alone, but not lost. She is not waiting. She is listening. The Hermit walks the hidden path not to escape the world, but to find her place within it.",
    "upright": "The Hermit invites you into sacred solitude — not isolation, but deep reflection. This is a time to step back, withdraw from the noise, and reconnect with your inner light. Like the snow leopard, your power lies in presence, in quiet discernment. The answers you seek are not outside you. They live in the stillness you often avoid. Trust the wisdom that comes in silence. Let your lantern lead, even if it only shows the next step.",
    "reversed": "When reversed, The Hermit may suggest withdrawal has gone too far, or that you're resisting alone time when your soul craves it. You might be lost in overthinking, disconnected from your inner voice, or clinging to external validation. This card asks: are you hiding or healing? Have you gone quiet to listen — or to avoid what you might hear? Reconnection begins with honesty. Light the lantern. Come back to yourself."
  },
  {
    "id": 10,
    "name": "Wheel of Fortune",
    "image": "cards/images/WheelOfFortune.png",
    "keywords": ["cycles", "destiny", "change", "fortune", "turning point"],
    "description": "A great tortoise moves slowly under the full moon, her shell thick with moss, stars glowing at her feet. Etched into her back is a golden spiral — a sigil of completion, of the journey that circles inward before it expands outward again. She carries the memory of all the paths you've walked, and she walks forward still. The Wheel does not rush. She knows there is nowhere to get to. You are already home.",
    "upright": "The World marks the completion of a cycle — a moment of integration, achievement, and wholeness. This is the deep exhale after effort, the stillness after revelation. You have come full circle, and in doing so, you've become someone new. The tortoise reminds you that the pace of transformation is not measured by speed but by depth. Honor how far you've come. Celebrate your growth. And when you're ready, begin again — from a place of quiet mastery.",
    "reversed": "Reversed, The World may reflect resistance to closure, a fear of moving on, or a sense of incompleteness. You might be looping back through an old pattern, unsure if you've truly finished the lesson. This card gently asks: what are you holding onto that's already been lived? What part of you still doubts it's worthy of arriving? Completion does not mean perfection. Let yourself receive the ending. The next journey will wait until you're ready — and you will be."
  },
  {
    "id": 11,
    "name": "Justice",
    "image": "cards/images/Justice.png",
    "keywords": ["balance", "truth", "accountability", "fairness", "clarity"],
    "description": "An owl sits poised between stone pillars beneath a sky filled with stars. Her eyes do not waver. Above her, a scale holds two truths — a feather and a metal sphere — perfectly balanced. Before her rests a golden chalice etched with sacred symbols, and an ancient scroll lies at her feet. Nothing here is accidental. Everything has weight. Justice sees all, not to judge, but to restore what is real.",
    "upright": "Justice asks you to meet the moment with integrity, clarity, and full presence. It is a card of cause and consequence — not punishment, but balance. You are being invited to take responsibility for your actions, your choices, and the truth you carry. The owl sees what is hidden. Let this be a call to see clearly, to speak honestly, and to align your life with your values. There is no need for force. When you live in truth, balance returns naturally.",
    "reversed": "When reversed, Justice may reflect imbalance, denial, or dishonesty — whether toward others or within yourself. You may be avoiding accountability or trapped in cycles of blame. This card asks: where are you out of alignment? Where are you sacrificing truth for comfort? The balance can't be forced, but it can be restored. Begin with one honest step. One clear act. One returned feather to the scale."
  },
  {
    "id": 12,
    "name": "The Hanged One",
    "image": "cards/images/HangedOne.png",
    "keywords": ["surrender", "pause", "perspective", "stillness", "release"],
    "description": "A black bat hangs upside down from a branch, wings wrapped gently around her body. Her golden eyes are wide open, not with fear but with calm awareness. Below her, an hourglass swings — time suspended, falling one grain at a time. A small bone charm rests at her chest, strung from the folds of her wings like a talisman of trust. All around her, roses bloom in the night. She waits, not because she must, but because she knows there's wisdom in the stillness.",
    "upright": "The Hanged Man invites you into a necessary pause. Not a punishment, but a pivot. A space between what was and what's next. This card asks you to surrender — not out of weakness, but out of devotion to a deeper truth. You are being asked to release control, to see the world from a new angle, and to trust that clarity will come in its own time. The bat reminds you that insight often comes from inversion. Let go. Be held. Let the hourglass do its work.",
    "reversed": "Reversed, The Hanged One may reflect resistance to letting go or discomfort with uncertainty. You may be clinging to motion for fear of what stillness might reveal. Or perhaps you've been stuck in a pause for too long, afraid to re-engage. This card calls you to assess: are you surrendering, or stalling? There is a difference. True surrender clears the way for transformation. Begin by trusting that the pause has a purpose — and that you will know when it's time to rise."
  },
  {
    "id": 13,
    "name": "The Hollow",
    "subtitle": "(formerly Death)",
    "image": "cards/images/TheHollow.png",
    "keywords": ["transformation", "release", "transition", "endings", "rebirth"],
    "description": "Deep beneath the earth, a bear sleeps in quiet surrender. Curled into herself, she rests beside a crumpled map and a bone bell — relics of the life she is releasing. Above her, under a full moon sky, a ghostly stag watches in silence. He is not here to awaken her, but to witness the sacred pause. The Hollow is not an ending. It is a waiting place. A womb. A grave. A promise.",
    "upright": "The Hollow is a card of release, transition, and surrender to what is dying or already gone. This is a sacred threshold — the moment when the old self falls away and the new has not yet arrived. The bear does not resist the descent. She allows herself to rest, to grieve, to dream in the dark. You are being asked to honor what is complete. Let the bone bell ring out your farewell. There is nothing to fix, only something to lay down. What's ahead will emerge in its time.",
    "reversed": "When reversed, The Hollow may point to fear of letting go, clinging to what no longer fits, or bypassing the grief that precedes rebirth. You may be resisting the stillness, trying to force clarity before it's ready. This card urges you to soften into the mystery. Not all healing happens in motion. Some transformations require stillness, silence, even surrender. If you feel lost, remember: the seed doesn't grow in the light — it begins in the dark."
  },
  {
    "id": 14,
    "name": "Temperance",
    "image": "cards/images/Temperance.png",
    "keywords": ["balance", "harmony", "healing", "integration", "patience"],
    "description": "A white swan glides across a moonlit pond, her feathers glowing like snow touched by starlight. On either side of her, vessels pour golden liquid into the water — two streams becoming one. Flowers bloom softly at the edges, their petals open in reverence. The night sky holds its breath. There is no rush, no striving. Only the sacred art of blending, of becoming.",
    "upright": "Temperance is the card of harmony, healing, and integration. It asks you to return to center — not by force, but by flow. Now is the time for patience, for soft recalibration, for trusting that what feels separate can be brought into union. The swan reminds you that beauty arises when we move with grace, when we honor both shadow and light as parts of the same whole. You are being invited to balance not just action and rest, but self and soul, heart and spirit. Let it be gentle.",
    "reversed": "Reversed, Temperance may reflect imbalance, excess, or inner dissonance. You might be pushing too hard in one direction, or swinging wildly between extremes. This card gently asks: where are you out of rhythm with yourself? Where are you trying to force what needs to unfold naturally? The healing you seek doesn't require perfection — it requires presence. Begin by noticing what wants to soften. Balance will return when you stop chasing it and start allowing it."
  },
  {
    "id": 15,
    "name": "The Devil",
    "image": "cards/images/TheDevil.png",
    "keywords": ["shadow", "temptation", "freedom", "attachment", "awareness"],
    "description": "A green snake coils in the shadows, her eyes sharp with ancient knowing. She does not strike — she watches. Wrapped around her tail is a golden chain, its clasp unhooked and waiting. The flowers around her are rich, red, and blooming. This is not evil. This is temptation, entanglement, and the invitation to remember: the chain was never locked.",
    "upright": "The Devil card appears when something is binding you — a belief, behavior, or pattern that once served but now constraints. You may feel stuck, addicted, or caught in a cycle of avoidance or control. Yet here, the snake reminds you: you have a choice. The chain is open. The power you fear may actually be your own, misunderstood or misdirected. This card asks you to name the shadow, sit with it, and reclaim what it has been guarding. There is freedom in awareness. Liberation begins when you stop pretending you're powerless.",
    "reversed": "Reversed, The Devil can signal a breakthrough, a loosening of what once held sway. Or, it may reflect denial — clinging to illusions of control or mistaking comfort for safety. Are you truly free, or simply numb? This card urges radical honesty. Look at what you fear. Look at what you crave. There is no shame here, only the chance to meet your shadow with compassion and courage. The snake is not here to punish — she is here to awaken."
  },
  {
    "id": 16,
    "name": "The Tower",
    "image": "cards/images/TheTower.png",
    "keywords": ["upheaval", "revelation", "collapse", "liberation", "breakthrough"],
    "description": "A raven perches on the broken stones of a fallen tower, wings folded in stillness as smoke and starlight swirl behind it. At the base of the ruins lies a shattered mirror, its surface cracked like lightning. Yet within those fractures, a single radiant star shines through. The structure has fallen, but something eternal remains — and it is calling you to see more clearly than ever before.",
    "upright": "The Tower arrives as a reckoning. A collapse of illusion, a rupture of the old structure that no longer serves your truth. It is not punishment. It is revelation. Like the raven, this card invites you to observe the ruins without fear, and to listen for what still speaks. What breaks here is not your essence — only the shell that contained it. This is liberation through disruption, a cosmic invitation to rebuild something more honest and alive.",
    "reversed": "When reversed, The Tower may reflect resistance to change, denial of what is crumbling, or fear of what comes next. You may be clinging to what feels familiar, even if it's long outgrown. This card suggests a quiet unraveling, an internal implosion rather than an external shock. It can also signal the aftermath — the pause after the fall, when clarity starts to bloom through the cracks. What have you been avoiding seeing? And what might open if you finally look?"
  },
  {
    "id": 17,
    "name": "The Star",
    "image": "cards/images/TheStar.png",
    "keywords": ["hope", "healing", "guidance", "renewal", "faith"],
    "description": "A lone wolf lifts her voice to the heavens, howling beneath a sky drenched in stars. At her feet rests a bowl of still water, reflecting starlight. She is surrounded by wildflowers — quiet witnesses to her longing and her light. This is not the cry of despair, but of remembrance. She sings not because she is lost, but because she is listening. And somewhere in the vast sky, something answers back.",
    "upright": "The Star is a moment of deep hope and healing. After upheaval, it brings a breath of grace. This card offers a return to faith — not blind optimism, but a quiet trust that something beautiful is still unfolding. The wolf reminds you to raise your voice, even when you feel small. There is guidance available, if you're willing to receive it. The bowl at her feet reflects stillness, intuition, and divine timing. You are being renewed. Stay open. Stay soft. Let yourself be led.",
    "reversed": "Reversed, The Star may reflect a dimming of hope, a period of doubt, or feeling disconnected from your path. You may be searching for signs but finding silence. This card asks you to check in with your inner voice — have you stopped listening, or have you stopped speaking? Reconnection begins with gentleness. Even the smallest ritual, a breath, a prayer, a cry, can reopen the channel. Trust that the light hasn't vanished. It may simply be waiting for you to believe in it again."
  },
  {
    "id": 18,
    "name": "The Moon",
    "image": "cards/images/TheMoon.png",
    "keywords": ["mystery", "intuition", "illusion", "dreams", "subconscious"],
    "description": "A great stag stands still beneath the deep blue sky, his golden antlers stretching wide, laced with glowing fireflies. Above him hang two moons — one full, one waning crescent — casting a silver shimmer over the forest floor. He is ancient and alert, caught between clarity and shadow, instinct and illusion. The Moon does not offer answers. It offers questions. And the courage to walk with them.",
    "upright": "The Moon calls you into mystery, asking you to trust your inner knowing even when the path ahead is unclear. This is a card of deep intuition, of dreams, symbols, and things not quite what they seem. Like the stag, you are being asked to move through the unknown with grace — alert, intuitive, and unafraid to pause. Not all guidance will come through logic. Pay attention to synchronicities, gut feelings, and the truth that rises when the world is quiet. Let yourself be led by something older than reason.",
    "reversed": "Reversed, The Moon may indicate confusion, illusion, or a refusal to see what's beneath the surface. You may be caught in projection, fear, or fantasy, unsure which way is forward. This card invites you to slow down and reconnect with your intuitive self. What are you not seeing clearly? What truth might emerge if you let the false light fade? The stag remains — poised, present, and listening. You are not lost. You are simply in the middle of a becoming."
  },
  {
    "id": 19,
    "name": "The Sun",
    "image": "cards/images/TheSun.png",
    "keywords": ["joy", "vitality", "clarity", "celebration", "radiance"],
    "description": "A wild horse runs through a field of golden sunflowers, her mane rippling like flame. A crown of sunflowers rests between her ears, bright and unburdened. The golden sun rises in one corner of the sky — and yet, stars still glimmer in the deep indigo above. She carries both light and dark with ease. She runs not from joy, but as it. There is nothing hidden here. Only life, in its fullest and freest form.",
    "upright": "The Sun is a card of radiance, clarity, and celebration. It reminds you that joy is not a reward — it is a birthright. This is a moment of brightness, of expansion, of being fully seen and loved exactly as you are. The horse invites you to move freely, to trust your vitality, and to express yourself without shame. Even with stars still in the sky, you shine. Let your happiness be holy. Let your presence light the path for others.",
    "reversed": "When reversed, The Sun may signal doubt in your own brightness, or a tendency to dim yourself for others. You might be searching for joy outside of yourself, forgetting it lives within. Or perhaps you're resisting celebration, waiting for the 'other shoe' to drop. This card asks: where have you learned that joy must be earned? Reclaim your light. Even a veiled sun still rises. Even a weary soul still shines."
  },
  {
    "id": 20,
    "name": "Judgement",
    "image": "cards/images/Judgement.png",
    "keywords": ["awakening", "reckoning", "clarity", "rebirth", "truth"],
    "description": "A great horned owl perches on a gnarled branch, wings outstretched beneath the stars. Below, feathers drift downward like echoes of the past. A tarnished mirror rests at the base of the tree, its surface half-veiled by a wind-blown cloth. Smoke and memory curl through the air. The owl does not look back — she sees through. She is not here to punish. She is here to awaken.",
    "upright": "Judgement invites you to witness your life with clarity and courage. This is a card of reckoning, but not of shame. It asks you to look into the mirror, to acknowledge what must be released, and to step forward into a more honest version of yourself. The owl reminds you that wisdom is not gained without facing the truth. This moment is a calling — not just to reflect, but to rise. Shed what no longer belongs to you. Claim what always has.",
    "reversed": "When reversed, Judgement may reflect self-doubt, avoidance, or fear of being seen fully. You might be holding onto guilt or refusing a necessary transformation. This card urges you to remember that awakening often begins with forgiveness — not of others, but of yourself. What part of you is still hiding behind the veil? What truth are you avoiding in the name of safety? The mirror is waiting. Look gently. Then rise."
  },
  {
    "id": 21,
    "name": "The World",
    "image": "cards/images/TheWorld.png",
    "keywords": ["completion", "wholeness", "integration", "achievement", "cycle"],
    "description": "A great tortoise moves slowly under the full moon, her shell thick with moss, stars glowing at her feet. Etched into her back is a golden spiral — a sigil of completion, of the journey that circles inward before it expands outward again. She carries the memory of all the paths you've walked, and she walks forward still. The World does not rush. She knows there is nowhere to get to. You are already home.",
    "upright": "The World marks the completion of a cycle — a moment of integration, achievement, and wholeness. This is the deep exhale after effort, the stillness after revelation. You have come full circle, and in doing so, you've become someone new. The tortoise reminds you that the pace of transformation is not measured by speed but by depth. Honor how far you've come. Celebrate your growth. And when you're ready, begin again — from a place of quiet mastery.",
    "reversed": "Reversed, The World may reflect resistance to closure, a fear of moving on, or a sense of incompleteness. You might be looping back through an old pattern, unsure if you've truly finished the lesson. This card gently asks: what are you holding onto that's already been lived? What part of you still doubts it's worthy of arriving? Completion does not mean perfection. Let yourself receive the ending. The next journey will wait until you're ready — and you will be."
  },

  // WANDS (22-35)
  {
    "id": 22,
    "name": "Maiden of Wands",
    "subtitle": "(formerly Page of Wands)",
    "image": "cards/images/MaidenOfWands.png",
    "keywords": ["inspiration", "curiosity", "exploration", "potential", "spark"],
    "description": "A fox kit stands in tall grass under a starlit sky, her eyes wide with wonder. Behind her, a fire crackles — not consuming, but calling. She doesn't yet know where she's going, but her paws are already in motion. Curiosity flickers in her chest like flame, and the world shimmers with potential. She is not reckless. She is awakening.",
    "upright": "The Maiden of Wands arrives as a spark of inspiration, a call to explore, to begin, to play. She carries the energy of a new desire, a wild idea, or a path that's whispering your name. This is a card of potential, not yet formed but fully alive. Like the fox kit, your role is not to have it all figured out — only to answer the fire. Say yes to what excites you. Follow the ember. Magic begins with curiosity.",
    "reversed": "Reversed, the Maiden of Wands may signal hesitation, self-doubt, or fear of taking the first step. You may be dimming your desire or waiting for permission to pursue what lights you up. Or perhaps your energy is scattered, your flame unfocused. This card reminds you that the path doesn't need to be perfect to be sacred. Reignite your spark. Let wonder lead you out of stagnation. Trust the fire, even if you don't yet know where it ends."
  },
  {
    "id": 23,
    "name": "Wildling of Wands",
    "subtitle": "(formerly Knight of Wands)",
    "image": "cards/images/WildlingOfWands.png",
    "keywords": ["action", "courage", "passion", "momentum", "boldness"],
    "description": "A fox races through a burning forest, firelight dancing off her fur as she leaps with fearless precision. Smoke billows around her, but she is not deterred. Her eyes burn with purpose. She is not running from the fire — she is made of it. The Wildling doesn't hesitate. She moves with the heat of her calling, with the urgency of becoming.",
    "upright": "The Wildling of Wands is action in its rawest form — fast, fiery, full of courage and momentum. This is a card of bold pursuit, of claiming your path with unapologetic intensity. It urges you to trust your instincts, speak your truth, and move toward your vision even if the way isn't clear. Like the fox in flames, your power lies in your willingness to leap. Just make sure your fire is pointed toward something real.",
    "reversed": "Reversed, the Wildling of Wands may reflect impulsiveness, burnout, or chasing something that doesn't truly align. You might be moving too fast without direction, or reacting from ego instead of soul. This card is a call to ground your fire. Where is your energy going? Are you hunting something that feeds you — or just trying to prove your power? Slow down. Refocus. Let desire meet discernment before you leap again."
  },
  {
    "id": 24,
    "name": "Mother of Wands",
    "subtitle": "(formerly Queen of Wands)",
    "image": "cards/images/MotherOfWands.png",
    "keywords": ["confidence", "leadership", "warmth", "protection", "charisma"],
    "description": "A fox lies curled in her den, eyes bright with unwavering presence. Before her, a circle of fire burns — not wild, not untamed, but tended. This flame is protection, warmth, and boundary. Her gaze is calm, but make no mistake — she sees everything. She knows when to rest, when to act, and how to guard what is hers without apology. She is the fire that keeps burning.",
    "upright": "The Mother of Wands embodies fierce love, intuitive leadership, and protective fire. She is radiant and self-possessed, magnetic not because she seeks attention, but because she knows her own worth. This card invites you to step into your full expression without shrinking, to protect your energy like a flame in the wind, and to trust that your passion is sacred. The fox teaches you to lead from both grace and grit — knowing when to strike and when to stay still.",
    "reversed": "Reversed, the Mother of Wands may reflect insecurity, burnout, or overprotection. You may be dimming your light to appease others, or using fire to push people away rather than hold true boundaries. This card asks: are you nurturing yourself as fiercely as you do others? Reclaim the fire within — not to fight, but to remember who you are. Your power doesn't need permission. It only needs devotion."
  },
  {
    "id": 25,
    "name": "Crone of Wands",
    "subtitle": "(formerly King of Wands)",
    "image": "cards/images/CroneOfWands.png",
    "keywords": ["wisdom", "mastery", "experience", "power", "presence"],
    "description": "A weathered fox stands on charred earth, one eye narrowed in a knowing wink, fur singed at the edges but glowing with embers. Smoke swirls around her like an old friend. Behind her, a fire still smolders — not a blaze of destruction, but a hearth of power. She's walked through flame, and she didn't just survive. She came out laughing.",
    "upright": "The Crone of Wands is fierce, unapologetic wisdom. She is charisma without ego, power without pretense, and confidence that doesn't need an audience. This card is a call to own your story — every scar, every spark — and lead from experience, not performance. You don't have to prove your fire. You are the fire. The Crone knows when to speak, when to rest, and when to burn it all down and start again. You've earned your place. Now own it.",
    "reversed": "Reversed, the Crone of Wands may reflect burnout, bitterness, or the temptation to dim your power out of exhaustion or fear of being too much. You may be doubting whether your voice is still needed, or struggling with feeling overlooked. This card says: you are not done. You are not broken. You are becoming. Reclaim your fire, even if it starts as a spark. Let your wisdom speak not just through words — but through presence."
  },
  {
    "id": 26,
    "name": "Ace of Wands",
    "image": "cards/images/AceOfWands.png",
    "keywords": ["potential", "inspiration", "desire", "creativity", "beginning"],
    "description": "A lynx emerges from the shadows, eyes locked on a flame rising from the earth. The fire is young but fierce, sprouting from a single wand and splitting the ground with veins of light. She moves toward it with steady instinct — not afraid, but awakened. Something ancient stirs. Something new begins.",
    "upright": "The Ace of Wands is a flash of creative power, raw desire, and untamed potential. It is the first pulse of yes — the moment before the leap, the hunger before the hunt. This card arrives when something within you is sparking to life. A vision. A longing. A path you've never dared step onto, until now. The lynx reminds you to trust your instinct and move toward the flame. You don't need a plan. You need a pulse.",
    "reversed": "Reversed, the Ace of Wands may point to blocked energy, fear of starting, or a loss of connection to your inner fire. You may be overthinking the leap, waiting for certainty that won't come. Or you've ignored the spark so long it's begun to fade. This card asks: What wants to burn through you? What have you silenced in the name of safety? Return to the wild source. Stoke your own flame. Even a single spark is enough to begin again."
  },
  {
    "id": 27,
    "name": "Two of Wands",
    "image": "cards/images/TwoOfWands.png",
    "keywords": ["vision", "planning", "direction", "decision", "anticipation"],
    "description": "A cougar stands on the edge of a high cliff, the Milky Way stretching above like a path written in starlight. Two torches burn behind her, marking the place from which she came — and the power she carries forward. Her gaze is fixed on the horizon, steady, alert, full of knowing. The world is wide, and something within her is ready to move.",
    "upright": "The Two of Wands is the card of vision and preparation — a sacred pause before the leap. You've felt the spark, and now you begin to shape it. This is the moment to claim your direction. What do you desire? What future are you choosing with your attention? The cougar reminds you: you already carry the fire. The choice now is how and where to use it. Trust your instincts. Choose from power, not fear.",
    "reversed": "Reversed, this card may reflect indecision, hesitation, or a fear of leaving your comfort zone. You may be stuck between two paths, or unsure whether to act at all. The fire is there, but you might be second-guessing your aim. This card asks: what vision are you delaying? What might open if you stop waiting for perfect conditions and begin with what you have? The cliff is not a threat. It's a threshold. Step forward."
  },
  {
    "id": 28,
    "name": "Three of Wands",
    "image": "cards/images/ThreeOfWands.png",
    "keywords": ["expansion", "progress", "foresight", "momentum", "growth"],
    "description": "A lone coyote stands at the edge of a canyon, her head lifted in song beneath a sky thick with stars. Around her, three flame-lit stones burn with purpose — each one a beacon, a prayer, a stake in the ground. She is not waiting. She is calling. She knows the path ahead stretches far, but her voice has already gone ahead to meet it.",
    "upright": "The Three of Wands is momentum made visible — the first proof that your vision is landing. What you've set in motion is beginning to echo back. This card speaks of growth, direction, and the power of aligned movement. The coyote reminds you: your voice has power. Your choices shape what rises to meet you. Keep going. Keep speaking. The world is listening.",
    "reversed": "Reversed, the Three of Wands may reflect delays, doubt, or resistance to expanding beyond familiar ground. You might be looking too far ahead or second-guessing your early efforts. The fire is there, but perhaps the path feels unclear. This card asks: are you calling in what you truly want, or what feels safe? Real expansion requires risk. Real vision requires faith. Recalibrate. Recommit. The horizon is waiting."
  },
  {
    "id": 29,
    "name": "Four of Wands",
    "image": "cards/images/FourOfWands.png",
    "keywords": ["celebration", "home", "community", "stability", "belonging"],
    "description": "Two squirrels sleep nestled together in the curve of a tree hollow, their bodies curled into a quiet embrace. Around them burns a braided circle of fire — warm, steady, protective. Leaves shimmer in the shadows, and the world outside fades into stillness. This is not the fire of pursuit. This is the fire you come home to.",
    "upright": "The Four of Wands marks a moment of celebration, belonging, and emotional sanctuary. You've passed a threshold, and now it's time to pause and honor what's been built — community, connection, or even just a deep breath of safety. This card invites you to return to your inner hearth. What feels like home? Who brings ease to your nervous system? Let yourself rest. Let yourself be witnessed. This is sacred joy — simple, whole, and well-earned.",
    "reversed": "Reversed, this card may suggest disconnection, restlessness, or difficulty receiving joy. You might be so focused on the next goal that you're missing the beauty already present. Or perhaps you're seeking belonging in spaces that don't reflect your true self. The fire is there, but you may not be letting it warm you. Return to the heart of what matters. Celebrate even the quiet wins. Belonging begins within."
  },
  {
    "id": 30,
    "name": "Five of Wands",
    "image": "cards/images/FiveOfWands.png",
    "keywords": ["conflict", "competition", "tension", "challenge", "friction"],
    "description": "Two rams square off above a blazing fire, horns coiled with power, eyes locked in challenge. Below them, five wands form a tepee over the flames — not yet collapsed, but not yet stable. The air crackles with heat, movement, and unspoken pressure. This is the dance before resolution. The charge before clarity. Something here is rising to be claimed.",
    "upright": "The Five of Wands speaks to conflict, competition, or inner tension. This is the energy of ideas clashing, egos sparking, or multiple forces vying for the same flame. It may feel chaotic — but it's also an opportunity. This card invites you to notice what's being revealed through friction. Where is your voice being sharpened? Where are your instincts being tested? You're not here to fight for dominance — you're here to discover what truly drives you. Use the heat to clarify your fire.",
    "reversed": "Reversed, this card can suggest avoidance of conflict, suppressed frustration, or disorganized energy. You might be retreating to keep the peace or stuck in circular arguments without resolution. The flame is smoldering, but not constructive. This is a call to name what's stirring beneath the surface. Step in — not to burn it all down, but to transform. Real growth sometimes requires discomfort. Don't fear the spark. Let it teach you."
  },
  {
    "id": 31,
    "name": "Six of Wands",
    "image": "cards/images/SixOfWands.png",
    "keywords": ["victory", "recognition", "success", "confidence", "achievement"],
    "description": "A black panther strides down a torch-lit path, eyes glowing with calm authority. Her steps are sure. The fire doesn't blaze wildly — it honors her. Around her, the forest holds its breath, lit by six steady flames. This is not just victory. This is embodiment. She doesn't need applause. She is the proof.",
    "upright": "The Six of Wands is a card of recognition, accomplishment, and arrival. You've moved through the heat, and now something is taking form — a win, a breakthrough, a moment of being seen. This card invites you to receive that acknowledgment, not from ego but from truth. The panther reminds you: dignity is quiet, but powerful. Own your path. Let your confidence rise from integrity. You've earned this light.",
    "reversed": "Reversed, this card may reflect self-doubt, fear of being seen, or attaching worth to validation from others. You might be undermining your own progress or comparing your journey to someone else's. The flame is still burning, but you may be turning away from it. This card asks: can you celebrate yourself without shrinking or seeking approval? Walk your path like it belongs to you. Because it does."
  },
  {
    "id": 32,
    "name": "Seven of Wands",
    "image": "cards/images/SevenOfWands.png",
    "keywords": ["defense", "courage", "resilience", "boundaries", "perseverance"],
    "description": "A porcupine sits steady on a woven barricade of burning wands, her quills lit with quiet fire. She doesn't bare teeth. She doesn't need to. Her presence says enough. This is not a fight — it's a stance. The forest watches in stillness, knowing she is prepared to defend what matters without losing her center.",
    "upright": "The Seven of Wands calls you to hold your ground — with strength, with clarity, and with fierce self-trust. You may feel challenged or tested, but this card reminds you: you're allowed to take up space. You're allowed to protect your vision. You're allowed to say no. The porcupine teaches that defense doesn't need to be aggression — it can be grace sharpened into presence. Stand tall in your fire. You're stronger than you feel.",
    "reversed": "Reversed, this card may reflect overwhelm, defensiveness, or fear of standing alone. You might be bracing too hard, isolating, or retreating out of exhaustion. Or perhaps you're doubting whether you have the right to draw a line. This card whispers: your fire is worth protecting. You don't need to explain yourself to be valid. Just breathe. Recenter. Then hold your ground like the forest lives inside you — because it does."
  },
  {
    "id": 33,
    "name": "Eight of Wands",
    "image": "cards/images/EightOfWands.png",
    "keywords": ["speed", "movement", "momentum", "clarity", "flow"],
    "description": "A black wolf runs under a sky ablaze with stars and flame, her paws barely touching the earth. Behind her, eight torches burn in perfect rhythm, lining her path like arrows of purpose. There is no doubt. No hesitation. Only motion. Something has clicked into place. The fire is flowing forward, and so is she.",
    "upright": "The Eight of Wands brings speed, synchronicity, and forward momentum. What felt stuck now surges ahead. Communication is clear, movement is rapid, and the energy is aligned. This is the greenlight you've been waiting for. The wolf reminds you to trust the flow — not everything needs to be micromanaged. Let your instincts lead. Say yes. The path is open.",
    "reversed": "Reversed, this card may signal delays, scattered energy, or overwhelm. You might be rushing without direction or feeling like everything is happening too fast to process. The fire is wild, but not yet focused. Pause. Re-center. Where are you actually being called to go? Speed is only helpful when it's aligned. Let clarity guide the pace, not pressure."
  },
  {
    "id": 34,
    "name": "Nine of Wands",
    "image": "cards/images/NineOfWands.png",
    "keywords": ["perseverance", "resilience", "determination", "boundaries", "endurance"],
    "description": "A badger stands guard in the twilight forest, ringed by nine flaming wands. Her fur is singed, her eyes sharp, her posture steady. Smoke rises behind her, and though her body is tired, she does not back down. She has come too far to give up now. This is not a moment of ease. This is a moment of resolve.",
    "upright": "The Nine of Wands is perseverance in the face of exhaustion. It is the last push before the breakthrough, the sacred grit it takes to keep going when you're worn but not willing to quit. You may feel tested, guarded, or wary — but your strength is holding. The badger reminds you that boundaries are power, not weakness. Trust what you've built. You're not alone in this fire. You are becoming through it.",
    "reversed": "Reversed, this card may reflect burnout, hyper-vigilance, or defensiveness. You might be stuck in survival mode, bracing against threats that no longer exist, or pushing past your own limits. The flame is dimming, not from lack of will, but lack of rest. It's okay to lay down your guard. It's okay to ask for support. The fire will not die if you pause to breathe — it may burn brighter because of it."
  },
  {
    "id": 35,
    "name": "Ten of Wands",
    "image": "cards/images/TenOfWands.png",
    "keywords": ["burden", "responsibility", "overwhelm", "exhaustion", "release"],
    "description": "A donkey moves slowly beneath a bundle of burning sticks, each one heavy with expectation, responsibility, or survival. Her head is bowed, hooves worn from the path. The fire she carries once lit the way — now it threatens to consume her. She doesn't resist. But she doesn't rejoice, either. This is the moment before the release. The knowing that something must be set down.",
    "upright": "The Ten of Wands speaks to overwhelm, responsibility, and emotional or energetic burnout. You may be carrying more than your share, more than you need to, or more than is sustainable. This card invites you to assess: what weight is truly yours? What burdens have you taken on out of habit, guilt, or fear? The donkey reminds you that strength is not in how much you can hold — it's in knowing when to let go. You don't have to do it all alone.",
    "reversed": "Reversed, this card may reflect resistance to asking for help, or the collapse that comes from chronic overextension. You may be so used to carrying everything that you've forgotten how to rest. Or perhaps you're avoiding your responsibilities entirely, disconnected from what actually needs tending. This card calls for radical honesty. What's burning you out? What can be released, delegated, or reimagined? The fire will not die if you step away. It may even burn more clearly."
  },

  // CUPS (36-49)
  {
    "id": 36,
    "name": "Maiden of Cups",
    "subtitle": "(formerly Page of Cups)",
    "image": "cards/images/MaidenOfCups.png",
    "keywords": ["curiosity", "sensitivity", "intuition", "emotion", "wonder"],
    "description": "A young whale swims through glowing currents, eyes wide, belly lit by a golden light rising from the ocean floor. Behind her, the shape of an elder moves in silent watch, a crescent moon hanging in the tide. Everything here is felt more than seen, known more than named. She swims not toward answers, but wonder.",
    "upright": "The Maiden of Cups invites you into emotional openness, intuitive exploration, and the soft power of curiosity. This is the energy of vulnerability made sacred — the first flicker of a new feeling, a creative spark, or the tender beginnings of love. The whale reminds you to trust your inner tide. Let your heart speak in its own language. Stay soft, stay curious, and listen for what lives beneath the surface. There is beauty in your sensitivity — don't rush to translate it. Just feel.",
    "reversed": "Reversed, this card may point to emotional immaturity, creative block, or avoidance of deeper feelings. You might be overwhelmed by sensitivity or cut off from it entirely, unsure how to navigate what's rising. This card calls you back to center. What are you afraid to feel? What story are you telling about your softness? Begin again with compassion. You don't have to have it all figured out — you just have to stay in the water."
  },
  {
    "id": 37,
    "name": "Wildling of Cups",
    "subtitle": "(formerly Knight of Cups)",
    "image": "cards/images/WildlingOfCups.png",
    "keywords": ["emotion", "romance", "pursuit", "vulnerability", "idealism"],
    "description": "A whale breaches beneath a full moon, water arcing around her like wings of emotion and light. Below the surface, her kin move in slow rhythms, but she leaps — drawn toward the golden fire flickering above the waves. She does not hesitate. She follows the pull of her heart, even when it lifts her from the depths into something unknown.",
    "upright": "The Wildling of Cups is the embodiment of emotional courage, heart-led motion, and sacred vulnerability in motion. She is the quester of feeling, the dreamer in pursuit. When this card appears, it signals a call to follow what moves you — love, art, intuition, empathy — even if it doesn't 'make sense.' The whale reminds you that emotion isn't a weakness. It's a wave to ride. Leap toward what matters. Let your feelings be the fire that fuels you.",
    "reversed": "Reversed, the Wildling of Cups may reflect escapism, emotional impulsiveness, or the pursuit of illusion. You may be swimming in romantic fantasy or avoiding uncomfortable truths beneath the surface. This card asks: are you chasing a dream or running from a wound? Slow down. Return to the deeper current. What you're feeling is real — but it also needs grounding. Let the water move through you, not carry you away."
  },
  {
    "id": 38,
    "name": "Mother of Cups",
    "subtitle": "(formerly Queen of Cups)",
    "image": "cards/images/MotherOfCups.png",
    "keywords": ["compassion", "intuition", "nurture", "empathy", "emotional depth"],
    "description": "A great whale swims through a glowing undersea canyon, her body vast, her presence soft and enveloping. Around her, others drift in gentle orbit, drawn to her calm. Coral glows like fire beneath the waves, illuminating the stillness she carries. She does not chase — she receives. She does not command — she radiates. She knows that true power moves in still water.",
    "upright": "The Mother of Cups is intuition, compassion, and emotional mastery. She invites you to drop into the deep — not for answers, but for knowing. Her waters are restorative, protective, and wise. This card calls you to nurture yourself and others from a place of sovereignty. Boundaried softness. Healing that holds without absorbing. You are the vessel now — what will you choose to carry? Let your empathy flow without drowning. Let your love be sacred, not sacrificial.",
    "reversed": "Reversed, this card may signal emotional overwhelm, codependency, or clouded intuition. You may be overextending your care, neglecting your own needs, or caught in the tides of someone else's pain. The Mother reminds you: your presence is powerful, but not at the cost of your peace. Come home to your body. Ground the water. Refill your own cup before you pour. Even oceans have tides — let yours return."
  },
  {
    "id": 39,
    "name": "Crone of Cups",
    "subtitle": "(formerly King of Cups)",
    "image": "cards/images/CroneOfCups.png",
    "keywords": ["wisdom", "emotional balance", "mastery", "calm", "depth"],
    "description": "A massive whale rises from the deep, her body ancient and still, her gaze fixed on the moon. A glowing spiral of light drifts from her chest to the surface — a song, a memory, a knowing that has no name. She does not chase waves. She is the tide. Around her, the ocean breathes. She feels everything, but she is not ruled by any of it.",
    "upright": "The Crone of Cups is emotional wisdom, sacred empathy, and the art of navigating intensity with grace. She's the one who can hold space for others without losing herself, the one who listens between the lines. This card asks you to embody your emotional truth — not with drama, but with depth. You don't need to react. You need to root. Let your feelings rise like tides, not storms. Be the calm in your own sea. Your intuition is deep, refined, and ready.",
    "reversed": "Reversed, this card may reflect emotional repression, moodiness, or avoidance of vulnerability. You may be disconnecting from your heart or drowning in it. There could be a fear of appearing weak, or a tendency to control emotions instead of expressing them. The Crone reminds you: power and softness are not opposites. Dive into your waters with compassion. Let your truth rise to the surface — even if it's quiet, even if it's slow."
  },
  {
    "id": 40,
    "name": "Ace of Cups",
    "image": "cards/images/AceOfCups.png",
    "keywords": ["love", "new feelings", "healing", "intuition", "overflow"],
    "description": "A baby sea turtle gazes out toward the moonlit ocean, its path illuminated by gentle waves and golden reflections. Nearby, two small bowls overflow with shimmering water — full, untouched, waiting. The air is still, sacred. Something new is stirring in the tides. Not a storm, but a blessing.",
    "upright": "The Ace of Cups is the sacred spark of feeling, intuition, and emotional renewal. It heralds new love, deep healing, spiritual connection, or a creative offering from the heart. This card invites you to soften, to open, to let the waters rise. The turtle reminds you that even tender beginnings carry great strength. Trust what flows. Trust what fills. Something beautiful is asking to begin — all you have to do is say yes.",
    "reversed": "Reversed, this card may reflect blocked emotion, unexpressed feelings, or fear of vulnerability. You may be guarding your heart too tightly, or struggling to receive what's being offered. The water is here — but are you allowing yourself to drink from it? This card gently encourages emotional honesty and self-compassion. Begin with a breath. Begin with a tear. Begin with a whisper of truth. The tide will meet you."
  },
  {
    "id": 41,
    "name": "Two of Cups",
    "image": "cards/images/TwoOfCups.png",
    "keywords": ["partnership", "connection", "union", "reciprocity", "intimacy"],
    "description": "Two wolves meet at a moonlit stream, their eyes locked, their bodies stilled in mirrored curiosity and reverence. Between them, two golden cups rest at the edge of the water, and a red thread glows just beneath the surface — a bond, a vow, a tether of something ancient. They do not need to speak. The connection is already formed.",
    "upright": "The Two of Cups speaks of union, harmony, and emotional reciprocity. This card signals a deep connection — romantic, platonic, or spiritual — rooted in mutual respect and soul resonance. It's not about perfection. It's about presence. The wolves remind you: true partnership is built on attunement, not possession. This is a call to open your heart and meet another from a place of emotional truth. Vulnerability is not weakness. It's the doorway to intimacy.",
    "reversed": "Reversed, this card may point to imbalance, emotional disconnection, or misalignment within a relationship — or even within yourself. You may be giving too much, receiving too little, or avoiding authentic emotional exchange. The bond may still exist, but it's clouded by fear, expectation, or silence. This card gently urges reconnection — through truth, not performance. What needs to be said? What needs to be felt? Begin there."
  },
  {
    "id": 42,
    "name": "Three of Cups",
    "image": "cards/images/ThreeOfCups.png",
    "keywords": ["celebration", "friendship", "community", "joy", "support"],
    "description": "Three otters float under the full moon, paws clasped in a radiant circle. Between them, three cups hold glowing candlelight, flickering across the gentle ripples. They laugh without words, held by the water, by each other, by the soft, shimmering night. This is communion. This is joy without performance. This is what happens when you're fully seen — and still loved.",
    "upright": "The Three of Cups is celebration, soul family, and emotional support. It marks a time of shared joy, mutual care, and sacred community. Whether through friendships, chosen family, or kindred spirits, this card reminds you that you are not meant to walk this path alone. Let yourself be held. Let yourself be witnessed. Let yourself revel in the magic of mutual resonance. This is not surface joy — it's deep, rippling, nourishing connection.",
    "reversed": "Reversed, this card may reflect disconnection, exclusion, or relational imbalance. You might be yearning for deeper connection or caught in dynamics that no longer nourish you. There may be a call to reassess your circle — who pours into you, and who drains you? Or perhaps you've been keeping yourself outside the circle, afraid of vulnerability. Let this card be an invitation back in. Back to joy. Back to the ones who see you and say, 'yes — exactly as you are.'"
  },
  {
    "id": 43,
    "name": "Four of Cups",
    "image": "cards/images/FourOfCups.png",
    "keywords": ["contemplation", "apathy", "withdrawal", "reassessment", "disenchantment"],
    "description": "A white stag rests beneath the moon, eyes closed, breath slow. Before him sit four golden cups — one glowing, one steaming, two untouched. The forest is still. The air hums with quiet invitation. But the stag does not move. He is not asleep, nor at peace. He is between — between feeling and numbness, between receiving and retreating.",
    "upright": "The Four of Cups is contemplation, emotional withdrawal, or the soul's subtle yearning. You may be feeling disenchanted, disconnected, or unsure how to engage with what's being offered. There is something sacred about this pause — a chance to listen inward, to reassess, to reconnect with what actually matters. The stag reminds you: stillness isn't the enemy. But don't let it become avoidance. Look again. What cup is calling you back?",
    "reversed": "Reversed, this card may reflect apathy, avoidance, or a refusal to open the heart. You might be closed off to new connections or so focused on what's lacking that you've become blind to the beauty already present. Or perhaps you're clinging to what once brought meaning, even though the cup is empty. This card asks: what are you really longing for? Can you meet that desire with honesty, rather than numbness? The heart wants to feel — let it."
  },
  {
    "id": 44,
    "name": "Five of Cups",
    "image": "cards/images/FiveOfCups.png",
    "keywords": ["loss", "grief", "regret", "disappointment", "healing"],
    "description": "An elephant stands in the moonlit forest, eyes lowered toward three shattered cups at her feet. Their fragments glow with embers of what once was. Behind her, two whole cups remain untouched beside a flickering flame — not bright, but steady. The air is heavy with memory, and the elephant does not rush. She honors what's been lost before turning to what's still whole.",
    "upright": "The Five of Cups is sorrow, regret, or emotional loss. It marks a moment of mourning — not just of people or events, but of dreams, innocence, or expectations unmet. This card allows space for grief. For naming what's broken. But it also carries a quiet truth: not everything is lost. Behind the pain, there is still love. Still hope. Still something that can be healed. Let yourself feel it. Then, when you're ready, turn toward the cups still standing.",
    "reversed": "Reversed, this card may indicate resistance to grief, clinging to the past, or being consumed by disappointment. You might be looping through old stories or numbing what wants to be acknowledged. This card urges release. Not to forget, but to forgive — yourself, the path, the process. You don't have to stay in sorrow to honor it. What if what remains is not a consolation — but a beginning?"
  },
  {
    "id": 45,
    "name": "Six of Cups",
    "image": "cards/images/SixOfCups.png",
    "keywords": ["nostalgia", "memory", "innocence", "childhood", "reconnection"],
    "description": "A magpie perches on a branch at forest's edge, surrounded by six tiny cups filled with collected treasures — a couple button, a pebble, a marble, a feather and a leaf. Simple things, sacred through meaning. The light is soft, golden, familiar. This is a moment caught between childhood and now, between what was and what still whispers through time. She remembers. She honors. She does not cling.",
    "upright": "The Six of Cups is memory, nostalgia, and the tender echo of the past. It invites you to reconnect with a simpler time — a childhood joy, a meaningful relationship, or a part of yourself you've left behind. This is not a call to retreat, but to remember. To reclaim what once nourished you. The magpie teaches that treasures aren't always grand — sometimes they're a scent, a moment, a song. Let this card soften you. Let it remind you what love felt like before the world asked for conditions.",
    "reversed": "Reversed, this card may speak to clinging to the past, idealizing memory, or struggling to let go. You may be caught in what was, unable to see what is. Or perhaps your inner child is asking for attention, but you're brushing them aside. This card gently asks: what are you really yearning for? Is it time to revisit — or release? Find the wisdom in what you carry, but don't forget to live in the present. Nostalgia is a bridge, not a home."
  },
  {
    "id": 46,
    "name": "Seven of Cups",
    "image": "cards/images/SevenOfCups.png",
    "keywords": ["choices", "illusion", "fantasy", "imagination", "confusion"],
    "description": "A luminous jellyfish drifts through deep water, surrounded by seven glowing cups. Each holds something different — flame, light, mystery, treasure — some beautiful, some unclear. The water is dreamlike, thick with possibility. The jellyfish does not rush. She knows not every glow is guidance. Some are only a distraction.",
    "upright": "The Seven of Cups invites you to explore your desires, options, and dreams. This card is rich with possibility — but not all of it is aligned. Some cups hold truth, others fantasy, projection, or confusion. You're being called to discern, not indulge. Let your intuition be the current that guides you. What feels like soul? What feels like seduction? The jellyfish teaches that movement through uncertainty requires sensitivity, not urgency. Pause. Feel. Choose with care.",
    "reversed": "Reversed, this card may reflect overwhelm, escapism, or indecision. You might be scattered, chasing too many dreams at once, or avoiding choice altogether out of fear of missing out. Alternatively, you may have been seduced by illusion — believing something was real when it was only reflection. The water is clouded, but clarity is coming. Anchor back into your truth. One chosen cup, rooted in soul, is worth more than seven unclaimed."
  },
  {
    "id": 47,
    "name": "Eight of Cups",
    "image": "cards/images/EightOfCups.png",
    "keywords": ["departure", "transition", "seeking", "walking away", "evolution"],
    "description": "A crimson crab pauses at the shoreline under a full moon, red ribbon trailing behind it like memory. Eight golden cups rest stacked by the rocks — untouched, gleaming, but somehow no longer enough. The tide is rising. The moon calls. And though the crab moves slowly, it moves with knowing. Something deeper awaits.",
    "upright": "The Eight of Cups is a card of departure, soul-searching, and emotional evolution. It comes when something — even something once cherished — no longer fits. You may feel a pull to walk away, not out of failure, but out of truth. This is the sacred choice to seek more: more depth, more alignment, more meaning. The crab teaches that it's okay to move sideways, to take your time, to carry your softness with you. Trust your inner tide. You know when it's time to go.",
    "reversed": "Reversed, this card may reflect fear of leaving, stagnation, or emotional denial. You may be staying in a situation that drains you out of obligation, comfort, or fear of the unknown. Or perhaps you've already walked away, but part of you still lingers. This card asks: what are you avoiding feeling? What would it take to honor your soul's direction? The cups you leave behind do not define you. The ones you seek will."
  },
  {
    "id": 48,
    "name": "Nine of Cups",
    "image": "cards/images/NineOfCups.png",
    "keywords": ["fulfillment", "satisfaction", "contentment", "gratitude", "wish"],
    "description": "A peacock stands poised in the glow of twilight, its iridescent feathers fanned around nine golden cups, each one gleaming. At the center blooms a radiant lotus, pulsing with light. Behind it, a waterfall flows in a gentle cascade, completing the scene with stillness and song. This is not vanity — this is embodiment. This is joy anchored in truth.",
    "upright": "The Nine of Cups is emotional fulfillment, satisfaction, and inner contentment. This is the 'wish come true' card — not just in outcome, but in feeling. Something you've longed for is blooming. It may be external, or it may be the internal realization that you are whole, worthy, enough. The peacock reminds you that celebration is sacred. You've earned this moment. Drink it in. Let joy be your altar and presence your prayer.",
    "reversed": "Reversed, this card may reflect superficial satisfaction, hollow success, or emotional disconnect despite achievement. You may have what you thought you wanted, but something still feels missing — or you may be chasing goals that aren't truly yours. This is a call to realign desire with soul. The lotus blooms from within. What truly brings you joy? What would it mean to be fulfilled not in image, but in essence?"
  },
  {
    "id": 49,
    "name": "Ten of Cups",
    "image": "cards/images/TenOfCups.png",
    "keywords": ["harmony", "love", "family", "belonging", "fulfillment"],
    "description": "Two penguins stand close, heads bowed gently over their chick, who looks out with a soft smile. Behind them, the moon shines full and bright, casting silver light across the snow. Ten golden cups form a luminous arc around a still pool, reflecting warmth, belonging, and peace. This is not the beginning of love — it is the deep root. The home you build in others, and in yourself.",
    "upright": "The Ten of Cups is emotional harmony, deep fulfillment, and soul-aligned relationships. It speaks of lasting joy — not the fleeting thrill, but the stable, glowing warmth of love that is known, chosen, and tended. This card points to wholeness in connection — whether found in family, chosen kin, community, or deep spiritual unity. The penguins remind us that love is not about perfection. It's about presence, devotion, and the quiet joy of being seen and safe.",
    "reversed": "Reversed, this card may reflect fractured connections, unmet expectations, or longing for belonging that feels out of reach. You might be comparing your life to an ideal, or struggling with relationships that feel out of alignment. This is a call to redefine fulfillment on your own terms. What does love really mean to you? What needs tending in order to feel truly at home in your heart? The cups are still here. Let yourself receive them — even if they look different than you imagined."
  },

  // SWORDS (50-63)
  {
    "id": 50,
    "name": "Maiden of Swords",
    "subtitle": "(formerly Page of Swords)",
    "image": "cards/images/MaidenOfSwords.png",
    "keywords": ["curiosity", "clarity", "communication", "observation", "truth"],
    "description": "A raven perches on a branch under a crescent moon, feathers sleek and eyes sharp. A single white plume falls through the sky like a thought catching light. The forest is still, yet her mind is moving — swift, curious, awake. She does not speak, but she is listening. She does not yet know, but she is watching. She is here to learn, to question, to discover the edges of her voice.",
    "upright": "The Maiden of Swords is mental clarity, new ideas, and the fresh spark of insight. She carries a hunger for truth, for observation, for understanding — often before mastery. This card invites you to explore with openness: a new study, a curious conversation, or an inner questioning. Let your thoughts sharpen, but stay humble. The raven reminds you: words are spells. Use them with awareness. Begin where you are, and ask brave questions.",
    "reversed": "Reversed, this card may reflect overthinking, scattered energy, or miscommunication. You may be stuck in analysis paralysis, or using intellect as a shield against feeling. Perhaps you're jumping to conclusions, or struggling to express what's true. This card asks you to slow down. Refine your focus. What are you really trying to say — and what fear sits beneath the words? Truth doesn't need to shout to be heard."
  },
  {
    "id": 51,
    "name": "Wildling of Swords",
    "subtitle": "(formerly Knight of Swords)",
    "image": "cards/images/WildlingOfSwords.png",
    "keywords": ["action", "conviction", "directness", "courage", "urgency"],
    "description": "A raven rises mid-storm, chains snapping in midair as lightning cracks behind her. Her wings cut the sky like blades — urgent, unrelenting. She does not hesitate. She does not ask permission. Her cry is a spell, a reckoning, a truth long held in silence now breaking free. This is the voice that refuses to stay bound.",
    "upright": "The Wildling of Swords is swift action, piercing intellect, and fierce conviction. She charges toward truth without apology, driven by purpose and clarity. When this card appears, it signals a time to speak up, move boldly, or defend your principles — especially if silence has cost you too much. The raven reminds you: thought is power when paired with courage. Just be mindful not to burn bridges with every word you wield. Let truth liberate, not destroy.",
    "reversed": "Reversed, this card can reflect impulsiveness, sharp-tongued defensiveness, or acting from reactivity rather than insight. You may be rushing without grounding, wielding words like weapons, or resisting nuance. Alternatively, you might be avoiding action entirely, afraid of confrontation or discomfort. This card asks: what truth wants to move through you — and how can you carry it with integrity? Don't just cut through. Cut cleanly, cut wisely, and know what you're cutting for."
  },
  {
    "id": 52,
    "name": "Mother of Swords",
    "subtitle": "(formerly Queen of Swords)",
    "image": "cards/images/MotherOfSwords.png",
    "keywords": ["clarity", "independence", "honesty", "boundaries", "discernment"],
    "description": "A raven stands on a high cliff beneath the full moon, her feathers ruffled by the night wind. One white plume lies at her feet — not lost, but chosen. She watches with sharp, steady eyes, silent yet commanding. Around her, the air hums with clarity. She does not chase. She does not coddle. She knows what is true, and she is not afraid to say it.",
    "upright": "The Mother of Swords is clear-sighted wisdom, honest communication, and fierce independence. She sees through illusion with ease and speaks with precision, never cruel, but never false. This card invites you to embody your truth — without apology or performance. Set boundaries with love. Say what needs saying. Listen with discernment. The raven teaches us that presence is powerful when rooted in integrity. You do not have to explain your clarity to anyone.",
    "reversed": "Reversed, this card may point to emotional detachment, cynicism, or overly sharp judgment. You may be guarding yourself with intellect, using clarity as a weapon, or speaking truth without compassion. Alternatively, you may be doubting your inner knowing, struggling to find your voice. The Mother asks: are you using your sword to cut or to clarify? Come back to the stillness. Truth can be strong without being harsh. Let wisdom meet warmth."
  },
  {
    "id": 53,
    "name": "Crone of Swords",
    "subtitle": "(formerly King of Swords)",
    "image": "cards/images/CroneOfSwords.png",
    "keywords": ["mastery", "authority", "intellect", "truth", "wisdom"],
    "description": "A raven perches high on a twisted branch, feathers sleek with time and wisdom. Below her, a scroll unravels midair, its runes dissolving like breath into stardust. She has read it. She remembers it. She knows what to carry and what to release. Her gaze is vast, her silence sharp. She speaks only when it cuts through fog like sky-light on stone.",
    "upright": "The Crone of Swords is intellectual mastery, sovereign clarity, and wisdom born from experience. This card invites you to rise into mental leadership — to speak from truth, not ego, and to trust your judgment without defensiveness. It may be time to lead, to decide, or to name what others are unwilling to face. The Crone teaches that clarity is not cruelty — it is precision born of love for what is real. When you see this card, ask: What is true? What must be spoken?",
    "reversed": "Reversed, this card can signal coldness, detachment, or rigid thinking. You may be using intellect as a shield, clinging to certainty at the expense of compassion. Or perhaps you're second-guessing your wisdom, shrinking your voice, or censoring yourself in fear of judgment. The Crone reminds you: your insight is hard-earned — but wield it with grace, not control. Wisdom whispers where force cannot reach."
  },
  {
    "id": 54,
    "name": "Ace of Swords",
    "image": "cards/images/AceOfSwords.png",
    "keywords": ["clarity", "breakthrough", "truth", "insight", "communication"],
    "description": "A glowing sword pierces the sky, rising from the horizon like a beacon. Its blade radiates golden light, perfectly still, impossibly clear. At its hilt perches a dragonfly, wings outstretched — delicate yet fierce, still yet soaring. All around, the dark sky seems to pause, as if truth itself has entered the room. There is no mistaking it. This is a moment of knowing.",
    "upright": "The Ace of Swords signals mental clarity, new insight, and the raw power of truth. A breakthrough is arriving — in thought, conversation, perspective, or communication. This card is a sword of discernment, not destruction. It asks you to cut through illusion, to name what you see, to speak what has gone unsaid. The dragonfly reminds you that transformation often begins with a single honest sentence — even if it's only whispered to yourself.",
    "reversed": "Reversed, this card may reflect confusion, miscommunication, or mental fog. You may be avoiding a truth, or clouding it with assumptions, overthinking, or fear of confrontation. Alternatively, you may be using your words to control or manipulate rather than illuminate. The sword is still here — but you must choose how to wield it. Clarity doesn't always arrive in thunder. Sometimes, it comes when you quiet the noise and ask: what's real beneath the chatter?"
  },
  {
    "id": 55,
    "name": "Two of Swords",
    "image": "cards/images/TwoOfSwords.png",
    "keywords": ["decision", "balance", "stalemate", "clarity", "inner knowing"],
    "description": "A praying mantis stands beneath the full moon, poised and unmoving. Two swords hang above her, draped with a sheer white cloth — a veil, a pause, a line not yet crossed. The night is heavy with silence. The mantis does not act. She waits. Her body knows that choice is sacred — and timing is everything.",
    "upright": "The Two of Swords is a card of decision, duality, and the moment of quiet clarity before action. You may be facing a crossroads or an inner conflict — one that asks not for impulse, but for patience and discernment. This card invites you to go within. Feel what each path evokes. Listen beneath the noise. The swords are suspended, but not forever. The praying mantis reminds you: presence is power. From stillness, your next move will become clear.",
    "reversed": "Reversed, this card may reflect avoidance, indecision, or denial. You may be refusing to look at something clearly — afraid of what truth or action will require. Or perhaps you're paralyzed by overthinking, stuck in analysis rather than trust. This card urges a gentle confrontation: What are you not seeing? What are you afraid to feel? It's okay to take your time — but at some point, the veil must lift. Your intuition already knows the way."
  },
  {
    "id": 56,
    "name": "Three of Swords",
    "image": "cards/images/ThreeOfSwords.png",
    "keywords": ["heartbreak", "sorrow", "truth", "pain", "clarity"],
    "description": "A white dove is pierced by three swords, blood trailing like petals from her body. Yet her wings are still open — trembling, radiant, real. Feathers fall like silent confessions. Behind her, the full moon glows through the clouds. This is not cruelty. This is clarity through heartbreak. This is the moment the truth cannot be unseen.",
    "upright": "The Three of Swords speaks to sorrow, betrayal, or emotional pain — the kind that cuts deep but clarifies. It is the ache of truth, the shattering of illusion, the moment when something falls apart in order to show you what's real. Though painful, this card is not punishment. It is a revelation. The dove teaches that grief is not weakness — it is a fierce rite of honesty. Let yourself feel what's true. The only way out is through.",
    "reversed": "Reversed, this card may reflect denial, suppression, or the lingering echo of past wounds. You may be avoiding heartbreak, or refusing to let go of pain that has shaped you for too long. There is a fear that if you open the wound, it will never stop bleeding. But the opposite is true — healing begins with honesty. The sword must be seen before it can be removed. Begin gently. Begin truthfully. You are allowed to mend."
  },
  {
    "id": 57,
    "name": "Four of Swords",
    "image": "cards/images/FourOfSwords.png",
    "keywords": ["rest", "recovery", "meditation", "retreat", "stillness"],
    "description": "A bat hangs in deep meditation, wings wrapped gently around itself. Four swords surround a quiet bowl of light below — not drawn, but present, their edges resting in silence. The cave hums with peace. This is not isolation. This is integration. The world continues beyond these walls, but the bat knows: nothing grows without rest.",
    "upright": "The Four of Swords calls for rest, retreat, and mental recalibration. After intensity or heartbreak, after action or upheaval, you need space to process — to mend, to remember who you are apart from the noise. This card invites sacred stillness: meditation, recovery, solitude, or silence. The bat teaches that darkness is not absence. It is sanctuary. Honor your need to pause. There is wisdom waiting in the quiet.",
    "reversed": "Reversed, this card may reflect burnout, forced withdrawal, or resistance to rest. You may be pushing through fatigue, fearing stillness, or avoiding the emotions that arise when you slow down. Alternatively, you may be isolating out of fear, rather than choosing rest from power. This card asks: what are you avoiding by staying busy? What might you feel if you stopped? You don't have to do everything right now. Lay the sword down. Let yourself recover."
  },
  {
    "id": 58,
    "name": "Five of Swords",
    "image": "cards/images/FiveOfSwords.png",
    "keywords": ["conflict", "defeat", "tension", "aftermath", "consequences"],
    "description": "A hornet hovers in a wind-torn sky, poised for another strike. Below it, five swords lie scattered across the earth — one driven deep, stained with blood and wrapped in a single white feather. Feathers swirl in the chaos. The land is scorched, quiet, and unsettled. This is not triumph. This is aftermath.",
    "upright": "The Five of Swords speaks to conflict, tension, and the fallout of words or actions that cut too deep. You may be in the midst of discord — internal or external — or wrestling with the consequences of a power struggle. This card asks: was it worth it? What was gained, and what was lost in the process? The hornet reminds us that anger is not inherently wrong — but it must be guided. Consider whether this battle was about truth… or control. And what healing may now be needed.",
    "reversed": "Reversed, this card may reflect unresolved conflict, avoidance, or self-sabotage. You may be replaying an old argument, internalizing blame, or avoiding necessary confrontation altogether. Alternatively, you may be caught in cycles of winning at all costs — and wondering why it still doesn't feel good. This card invites reflection: where are you giving your power to pain? What story are you defending… and is it still true?"
  },
  {
    "id": 59,
    "name": "Six of Swords",
    "image": "cards/images/SixOfSwords.png",
    "keywords": ["transition", "moving on", "journey", "healing", "release"],
    "description": "A goose takes flight under the full moon, leaving behind a small boat drifting across a silver lake. Six swords stand upright within it — not as weapons, but as markers of what's being carried forward. The water is calm, the night vast, the movement sacred. This is not escape. This is transition. A journey not of distance, but of transformation.",
    "upright": "The Six of Swords is a card of moving on — of leaving behind mental or emotional turbulence in search of peace. It may signify literal travel or internal release. Healing is in progress, but you're not at the destination yet. The goose teaches us that even hard-won clarity requires gentleness. Let the journey be quiet. Let the old weight dissolve. You don't need to know where you're going — only that you're not meant to stay where you were.",
    "reversed": "Reversed, this card may reflect resistance to change, clinging to the past, or difficulty finding closure. You may be trying to move on before you're truly ready — or avoiding the deeper emotional work the transition asks of you. The boat is waiting, but part of you may still be gripping the shore. This card invites you to trust the process. The swords are not your burden — they're your boundary, your truth, your wisdom. Carry only what honors your next becoming."
  },
  {
    "id": 60,
    "name": "Seven of Swords",
    "image": "cards/images/SevenOfSwords.png",
    "keywords": ["strategy", "deception", "discretion", "secrecy", "adaptation"],
    "description": "A chameleon clings to a branch, its eyes wide and watchful. Behind it, seven swords hang like a silent warning — not in motion, but always present. The air is thick with strategy. This is not an attack. This is awareness. The chameleon does not lash out — it adapts. It blends. It survives. But at what cost?",
    "upright": "The Seven of Swords speaks to strategy, secrecy, and the complex dance of truth and self-preservation. You may be navigating a situation that calls for tact, careful planning, or withholding. Sometimes this is wisdom — protecting your energy, your vision, your next move. But this card also asks you to examine your motives. Are you acting from alignment or avoidance? The chameleon reminds you: camouflage can be smart — but don't lose your own colors in the process.",
    "reversed": "Reversed, this card can point to deception, guilt, or internal misalignment. You may be hiding something — from others or from yourself — or engaging in behavior that erodes trust. Alternatively, you may be exposing a lie, or ready to come clean. This card asks for radical self-honesty. Where are you out of integrity? What truth have you outgrown pretending not to see? You don't have to manipulate to protect your power. Transparency is a sword too — sharp, clean, and liberating."
  },
  {
    "id": 61,
    "name": "Eight of Swords",
    "image": "cards/images/EightOfSwords.png",
    "keywords": ["limitation", "trapped", "restriction", "fear", "perception"],
    "description": "A moth flutters inside a glass jar, drawn to the soft flame of a lantern. Outside, eight swords form a circle — a wall, a warning, a veil. But the jar is not sealed. The lid rests lightly, almost ajar. This is not a prison of metal. It's a prison of mind. The light is real, the flame is warm — and yet the moth believes she cannot reach it.",
    "upright": "The Eight of Swords symbolizes mental entrapment, limitation, and the feeling of being stuck. But the true source of bondage here is belief — a story you may be telling yourself about your power, your worth, your freedom. This card asks you to question those thoughts. Are the bars real… or remembered? The moth reminds you: transformation begins when you stop flailing and look closely. What you perceive as a trap may actually be a doorway — if you dare to see it.",
    "reversed": "Reversed, this card may reflect the early stages of release — or deeper entrenchment in self-doubt and confusion. You may be beginning to see the way out but doubting your ability to take it. Or you may still be clinging to the illusion that escape is impossible. This is a call to reclaim your mental agency. Challenge the scripts. Break the jar. You are not powerless — only unpracticed in freedom. Begin with one true thought, and the rest will follow."
  },
  {
    "id": 62,
    "name": "Nine of Swords",
    "image": "cards/images/NineOfSwords.png",
    "keywords": ["anxiety", "worry", "fear", "nightmares", "anguish"],
    "description": "A fox curls into the shadows beneath a dark sky, its eyes glowing with sleepless knowing. Nine swords float above, ghostlike and still. Below, in the reflection of a quiet pool, the fox sees not just itself — but its fear, sharp and mirrored back. This is the hour when the mind turns in on itself. This is the ache of thoughts too long unspoken.",
    "upright": "The Nine of Swords is anxiety, regret, and the weight of unprocessed emotion. This card often shows up when your thoughts are keeping you trapped in cycles of fear, guilt, or shame — especially in the quiet hours. But it also brings a gift: awareness. What you are willing to face, you can begin to free. The fox teaches us that intelligence is a gift — but it must not become your cage. Let this be a moment of compassionate clarity. Speak the fear aloud. Break the spell.",
    "reversed": "Reversed, this card may show the beginning of healing — or the deepening of denial. You may be repressing what wants to be seen, or you may be ready to release what no longer serves. Alternatively, you may be projecting fears that no longer match reality. This is a time for self-compassion. No thought is permanent. No story is absolute. What is one truth you can hold onto tonight? Let that truth become your light."
  },
  {
    "id": 63,
    "name": "Ten of Swords",
    "image": "cards/images/TenOfSwords.png",
    "keywords": ["ending", "release", "rock bottom", "transformation", "completion"],
    "description": "A falcon lies grounded, wings limp, feathers scattered around it like fallen thoughts. Ten swords stand in a circle — not piercing flesh, but closing in like silent witnesses. There is no blood, only stillness. No rage, only the hush of what has ended. This is not defeat. This is the end of struggle. The falcon no longer fights. And in that stillness, something else begins.",
    "upright": "The Ten of Swords marks an ending — often painful, sometimes necessary, always transformative. It speaks to betrayal, collapse, or a moment when something you once relied on is no longer sustainable. It can feel like ruin… but it is also release. The falcon reminds you: when the mind surrenders what no longer serves, space is made for what will. This card is not about dying — it's about what the false self must let die in order for truth to rise.",
    "reversed": "Reversed, this card may point to resistance to endings, or the slow, painful process of recovering from one. You may be in the aftermath, still holding grief or refusing to accept what's been lost. Alternatively, you may be beginning to rise — raw, cautious, but breathing. This is your permission to feel it all. Don't rush the rising. You are not weak for needing rest. Even the falcon must ground before it can soar again."
  },

  // PENTACLES (64-77)
  {
    "id": 64,
    "name": "Maiden of Pentacles",
    "subtitle": "(formerly Page of Pentacles)",
    "image": "cards/images/MaidenOfPentacles.png",
    "keywords": ["opportunity", "study", "growth", "potential", "diligence"],
    "description": "A young Highland calf stands in a field of wild clover beneath a golden dawn. A single sprig dangles from her mouth, as if she's tasting possibility. Behind her, nestled in the grass, a pentacle rests like a promise yet to be planted. The mountains are distant, the work ahead, but she is not in a rush. The earth speaks slowly — and she is learning to listen.",
    "upright": "The Maiden of Pentacles is the energy of new growth, slow progress, and grounded curiosity. She represents the beginning of a journey toward mastery — especially in matters of body, work, home, or finances. This card invites you to take a tangible step toward your dreams. Study, plan, invest your energy wisely. The calf reminds you: sustainability is more powerful than speed. Start where you are. Plant the seed. Trust the roots to grow.",
    "reversed": "Reversed, this card may reflect procrastination, self-doubt, or scattered effort. You may be hesitating to commit, resisting structure, or avoiding the first humble step. Alternatively, you may be overworking without purpose, disconnected from the soul of what you're building. This card invites you to slow down and reconnect. What do you really want to tend? Even small acts become sacred when done with intention. Return to the soil. Begin again."
  },
  {
    "id": 65,
    "name": "Wildling of Pentacles",
    "subtitle": "(formerly Knight of Pentacles)",
    "image": "cards/images/WildlingOfPentacles.png",
    "keywords": ["dedication", "routine", "responsibility", "patience", "reliability"],
    "description": "A young Highland bull moves with steady purpose through the golden light, each hoofstep careful and deliberate. His coat glows with specks of wild pollen, the land blessing him as he passes. Behind him flows a clear stream — a sign of nourishment, patience, and earned momentum. He does not rush. He trusts the rhythm of the earth.",
    "upright": "The Wildling of Pentacles is grounded effort, steady growth, and devotion to long-term vision. This card invites you to show up — again and again — for what you care about. It's not glamorous work, but it is sacred. The Wildling doesn't need praise. He knows that good things take time, and that true mastery is born from repetition, responsibility, and care. This is your reminder to keep tending. Water the roots. Trust the pace. Integrity is a form of magic.",
    "reversed": "Reversed, this card may reflect stagnation, overcommitment, or resistance to responsibility. You might be grinding away at something that no longer feeds you — or you may be avoiding the work altogether, fearing failure or boredom. This card asks you to reconnect with purpose. Why did you begin? Is it still true? The path ahead will require effort — but if it's aligned, it will also be deeply nourishing. Don't mistake stillness for stuckness. Re-root, then rise."
  },
  {
    "id": 66,
    "name": "Mother of Pentacles",
    "subtitle": "(formerly Queen of Pentacles)",
    "image": "cards/images/MotherOfPentacles.png",
    "keywords": ["nurture", "abundance", "security", "practicality", "care"],
    "description": "A Highland cow stands with her calf nestled by her side, a quiet crown of leaves resting gently between her horns. She is solid, soft, and strong — the keeper of home, body, and belonging. She makes no boast of her magic, and yet everything she touches flourishes. This is not glamour. This is grounded devotion. The sacred in the simple. The power in presence.",
    "upright": "The Mother of Pentacles embodies warmth, care, and sacred stewardship. She shows up in all the ways love takes form — through nourishment, practical support, comfort, and consistency. This card asks: how are you tending what matters? Whether it's your body, your finances, your home, or your relationships, this is a time to ground and give from your center. The Mother does not pour from emptiness — she knows that sustainable care begins within. Root down, care deeply, and remember: devotion is divine.",
    "reversed": "Reversed, this card may reflect depletion, overgiving, or imbalance in how you care for others and yourself. You may be carrying too much, or neglecting your own needs in service of everyone else's. Alternatively, you may be overly focused on material security, forgetting the soul of what you're working for. This card invites you back to harmony. You are not meant to hold it all. Let the earth hold you, too. Rest. Replenish. Return to what truly nourishes."
  },
  {
    "id": 67,
    "name": "Crone of Pentacles",
    "subtitle": "(formerly King of Pentacles)",
    "image": "cards/images/CroneOfPentacles.png",
    "keywords": ["mastery", "wealth", "stability", "legacy", "stewardship"],
    "description": "A moss-covered Highland cow stands deep in the forest, her eyes closed in quiet sovereignty. Fireflies hover in reverence. At her feet, mushrooms, rabbit, stone, and symbol — the sacred infrastructure of life. She wears no crown but the one grown by time and devotion. She is not loud, but all life around her listens. This is wealth in its truest form: enoughness, harmony, belonging.",
    "upright": "The Crone of Pentacles embodies stewardship, resourcefulness, and legacy. She doesn't just accumulate — she sustains. She teaches through presence, through example, through care woven into every detail of life. When this card appears, it calls you to claim your grounded leadership. You are ready to be a rock for others, to manage your resources with wisdom, and to live in deep alignment with what you value. The Crone reminds you: abundance is not a rush. It's a rhythm. Build it well.",
    "reversed": "Reversed, this card may reflect over-control, material obsession, or fear-based hoarding. You might be clinging to security at the cost of joy — or overextending your energy to hold everyone else. Alternatively, you may be disconnected from the sacredness of the physical world altogether. This card invites you to re-root in intention. What truly nourishes you? What can you release? Come back to balance. Prosperity, like soil, needs tending — not tightening."
  },
  {
    "id": 68,
    "name": "Ace of Pentacles",
    "image": "cards/images/AceOfPentacles.png",
    "keywords": ["opportunity", "manifestation", "prosperity", "beginning", "potential"],
    "description": "A mole emerges from its earthen tunnel, paws covered in soil, nose soft and pink from the dark. Nestled in the roots below, a single pentacle glows like a buried star. It is not yet a tree. It is not yet a home. But it could be. This is the moment before bloom — a quiet promise taking root beneath the surface.",
    "upright": "The Ace of Pentacles represents new beginnings in the material realm — work, home, health, resources, or physical embodiment. It is a seed of potential, asking for your care, commitment, and grounded presence. This card invites you to begin building something tangible, something lasting. Whether it's a project, a practice, or a vision, this is a time to lay foundations with intention. The mole reminds you: not all magic begins in the light. Trust what stirs beneath the soil.",
    "reversed": "Reversed, this card may reflect missed opportunities, fear of failure, or difficulty grounding your ideas into form. You may be hesitating to plant the seed, or trying to rush growth without honoring the root work. Alternatively, you may be clinging to scarcity or mistrusting your capacity to sustain something new. This card gently asks you to return to your presence. Start small. Nurture what matters. You don't need to see the whole forest yet — just take care of the seed."
  },
  {
    "id": 69,
    "name": "Two of Pentacles",
    "image": "cards/images/TwoOfPentacles.png",
    "keywords": ["balance", "adaptation", "flexibility", "juggling", "rhythm"],
    "description": "A badger stands between two rounded stones, paws steady yet alert. Above, two pentacles hang like lanterns from the branches — held in tension, glowing with possibility. The badger is focused, grounded, and attuned. This is not chaos. This is rhythm. Beneath the surface, roots hold steady. Above, the weight shifts — not to overwhelm, but to teach harmony.",
    "upright": "The Two of Pentacles reflects the balance of daily life — the push and pull between work and rest, effort and ease, giving and receiving. It speaks to time management, adaptability, and the need to stay fluid amidst shifting demands. This card asks: what are you juggling? Is there a rhythm that wants to emerge? The badger reminds us that strength lies not in rigidity, but in the grace of presence. Prioritize. Simplify. Remember: you are allowed to move with the moment.",
    "reversed": "Reversed, this card can point to overwhelm, disorganization, or neglecting what truly matters. You may be saying yes to too much — or avoiding important responsibilities. Alternatively, you may be stuck in old patterns, afraid to drop one pentacle in order to catch what actually feeds you. This card invites you to recalibrate. What can be released? What truly needs your attention? Drop the illusion of perfect balance — and embrace conscious choice."
  },
  {
    "id": 70,
    "name": "Three of Pentacles",
    "image": "cards/images/ThreeOfPentacles.png",
    "keywords": ["collaboration", "teamwork", "skill", "planning", "craftsmanship"],
    "description": "A beaver pauses atop a carefully woven dam, the light of evening reflecting in the still water below. Three pentacles are embedded in the base of the structure — symbols of intention, effort, and unity. No part of this was built alone. Each stick, each stone, each layer of mud has been shaped by instinct, skill, and trust in the process. This is creation through cooperation. A vision made tangible, one layer at a time.",
    "upright": "The Three of Pentacles speaks to teamwork, planning, and the grounded magic of building something with others. It honors collaboration, mentorship, and shared labor. This card reminds you that mastery is never a solo act — and that co-creation deepens success. Whether you're joining a team or laying the blueprint for something lasting, now is the time to align effort with vision. The beaver teaches that slow, steady collaboration brings structure to even the wildest dreams.",
    "reversed": "Reversed, this card may reflect disharmony in group efforts, lack of appreciation, or a feeling of misalignment. You may be carrying too much alone, or struggling to see where your piece fits in the larger whole. Alternatively, ego or miscommunication could be hindering progress. This is a call to reconnect with purpose and people. Seek clarity, offer your skill, and know that sustainable structures are built through mutual respect and shared vision."
  },
  {
    "id": 71,
    "name": "Four of Pentacles",
    "image": "cards/images/FourOfPentacles.png",
    "keywords": ["security", "control", "conservation", "possession", "boundaries"],
    "description": "A hedgehog curls protectively around a small cluster of seeds, its tiny paws clenched tightly in defense. Around it lies a ring of four pentacles, like a warding circle against uncertainty. The space is earthy, enclosed, and still. This is safety. This is survival. But beyond this moment, the question lingers: when does protection become prison?",
    "upright": "The Four of Pentacles reflects stability, boundaries, and mindful stewardship of your resources — whether financial, energetic, or emotional. This card reminds you of the importance of grounding and conserving what you've earned. It's a time for discipline, perhaps restraint. But it also asks: are you holding from wisdom, or from fear? The hedgehog teaches us that it's okay to pause — but not to close ourselves off entirely. Security is a foundation, not a fortress.",
    "reversed": "Reversed, this card can indicate scarcity mindset, fear of loss, or clinging too tightly to control. You may be gripping your time, money, or emotional energy so hard that you've cut yourself off from flow and connection. Alternatively, it may suggest a need to establish firmer boundaries if your resources are being drained. This is a call to reflect: where are you being too guarded? Where might you loosen your grip in trust? True abundance comes not from grasping — but from grounded generosity."
  },
  {
    "id": 72,
    "name": "Five of Pentacles",
    "image": "cards/images/FiveOfPentacles.png",
    "keywords": ["hardship", "loss", "isolation", "struggle", "hope"],
    "description": "A thin, weary goat stands alone in a wintry landscape. Snow whips across the scene. Beside it, five pentacles cling to an old wooden post — one fallen to the frozen ground. The fence, once a boundary or beacon, now offers little shelter. The goat presses on, hardened by the cold, eyes dim with longing. But somewhere beyond this barren place, warmth still waits.",
    "upright": "The Five of Pentacles represents hardship — often material or physical — and the emotional toll of scarcity, illness, or isolation. It can signal a time of struggle or loss, where support feels distant and hope hard to hold. But this card is not without medicine. It reminds you that you are not alone, even when it feels that way. Help may be closer than you realize. Reach out. Let yourself be seen. The pentacles have not disappeared — they have simply shifted form. Look again.",
    "reversed": "Reversed, this card may indicate recovery, the beginning of hope, or the lingering weight of past wounds. You may be emerging from a time of difficulty — or resisting the support that's now available. Alternatively, this card can point to shame around receiving, or fear of vulnerability. It asks: are you defining yourself by your losses? Or can you open to the truth that you are already healing? Let the snow melt. Let the earth remember you."
  },
  {
    "id": 73,
    "name": "Six of Pentacles",
    "image": "cards/images/SixOfPentacles.png",
    "keywords": ["generosity", "giving", "receiving", "support", "balance"],
    "description": "A sow feeds her piglet under the golden haze of early morning light. The trough is full, and the hay glows with warmth. Around them, six pentacles are gently scattered — a quiet reminder that true wealth is not hoarded, but offered. The piglet receives, trusting completely. The mother provides, from a place of rooted sufficiency. Nothing is lost in this exchange — only transformed.",
    "upright": "The Six of Pentacles speaks of generosity, support, and the sacred balance between giving and receiving. You may be in a position to offer aid — or in need of it. Either way, this card reminds you that both roles are sacred, and that worth is not determined by which one you currently hold. There is a time to provide, and a time to be held. The sow teaches us that abundance flows best when it circulates. Let it move through you. Let yourself be part of the flow.",
    "reversed": "Reversed, this card may suggest imbalance — giving too much without replenishment, or resisting help due to pride, shame, or fear of dependence. It may also reflect strings-attached generosity or unconscious power dynamics in giving relationships. This is a moment to check in: are you giving from depletion or ego? Are you receiving with openness or resistance? True generosity is rooted in respect and consent. Release the need to prove. Restore the balance."
  },
  {
    "id": 74,
    "name": "Seven of Pentacles",
    "image": "cards/images/SevenOfPentacles.png",
    "keywords": ["patience", "assessment", "perseverance", "investment", "reflection"],
    "description": "A snail makes its way across a mossy stone, surrounded by tender green shoots and seven pentacles nestled in the soil. The garden is alive, but still growing. It is not yet the time to reap, but to watch. To wait. To wonder. The snail does not rush — it knows that roots deepen in stillness, and patience is its own form of progress.",
    "upright": "The Seven of Pentacles represents reflection, slow growth, and the long-term view. You've planted your seeds, tended your path, and now you stand at a threshold: Do I keep going? Is this still aligned? This card invites you to pause and assess. Not everything blooms quickly — or visibly. Trust the process, but be honest with yourself. Is this bearing the fruit you long for? Let the snail remind you: slow does not mean stuck. Progress is sometimes invisible, but no less real.",
    "reversed": "Reversed, this card can suggest frustration, burnout, or misaligned effort. You may be pouring energy into something that no longer nourishes you — or expecting results before the roots have had time to take hold. It can also point to impatience or the temptation to abandon something just before it bears fruit. This is the time to check in. What are you cultivating? Is it worth it? And if not — what are you afraid to let go of? Choose with care. Your energy is sacred."
  },
  {
    "id": 75,
    "name": "Eight of Pentacles",
    "image": "cards/images/EightOfPentacles.png",
    "keywords": ["mastery", "skill", "dedication", "craft", "discipline"],
    "description": "An ant moves methodically across a sunlit forest floor, piece by piece building its nest. Around the base of the mound lie eight pentacles, etched with care into the earth itself. Nothing about this work is flashy — but every grain matters. This is sacred labor. Intentional repetition. The alchemy of skill through effort.",
    "upright": "The Eight of Pentacles speaks to discipline, mastery, and dedication to your craft. Whether you're learning something new or refining a long-held skill, this card encourages persistence and attention to detail. You may not see instant results, but each effort is laying a powerful foundation. This is about process, not praise. Let the ant guide you into focused devotion. Honor the work. Trust that the work will, in time, honor you back.",
    "reversed": "Reversed, this card can reflect burnout, perfectionism, or frustration with your current progress. You may be doubting your path, distracted by comparison, or unwilling to engage the uncomfortable learning curve that growth requires. Alternatively, you may be overworking — pouring energy into something without balance or joy. This is your invitation to pause and reflect: Is your effort aligned with your values? Where can you re-center in purpose, not pressure?"
  },
  {
    "id": 76,
    "name": "Nine of Pentacles",
    "image": "cards/images/NineOfPentacles.png",
    "keywords": ["independence", "self-sufficiency", "luxury", "accomplishment", "abundance"],
    "description": "A deer rests in a clearing bathed in golden light. She is alone, but not lonely. Around her, nine pentacles glimmer like fallen fruit among the grass and brambles. The air is ripe with abundance — blackberries bloom, the branches hang low with plenty, and all is peaceful. This is the reward not of luck, but of tending. She has earned her stillness. She knows the land has responded to her devotion.",
    "upright": "The Nine of Pentacles speaks to self-sufficiency, accomplishment, and the grounded joy that arises from dedication and trust in your path. You've done the work. You've shown up, cultivated, refined — and now, you are invited to enjoy. This is a card of well-deserved rest, of beauty made manifest, of comfort earned through integrity. The deer reminds you: pleasure is not frivolous. It is sacred. Let yourself savor the sweetness.",
    "reversed": "Reversed, this card may indicate imposter syndrome, undervaluing your accomplishments, or struggling to receive what you've worked for. You may also be clinging to comfort in a way that has grown isolating or hollow. This is an invitation to reconnect with purpose and allow in the nourishment that's available. You don't need to prove your worth. It's already blooming around you. Come home to it."
  },
  {
    "id": 77,
    "name": "Ten of Pentacles",
    "image": "cards/images/TenOfPentacles.png",
    "keywords": ["legacy", "family", "wealth", "tradition", "completion"],
    "description": "An elephant herd walks a golden forest path, flanked by ancient trees bearing ten glowing pentacles. The path is well-trodden, but not worn. This is a place of inheritance — not just of wealth, but of wisdom, memory, and belonging. The old walk beside the young. Each step is both rooted in the past and moving into the future. This is not just a moment — it's a legacy.",
    "upright": "The Ten of Pentacles represents long-term security, legacy, and the fruition of effort over time. It is a card of deep-rooted abundance — not just money, but heritage, family, lineage, or the lasting impact of your work in the world. This card asks: What are you building beyond yourself? What do you wish to pass on? The elephants remind you: wealth isn't just what you gather, but what you give — and what continues without you, because of you.",
    "reversed": "Reversed, this card may point to instability, fractured foundations, or disconnect from your values. There may be a tension between tradition and freedom — or difficulty defining success on your own terms. It can also suggest concerns around money, family, or the fear of not having 'enough.' This is a time to reflect: What does legacy mean to you? What are you truly cultivating? Rebuild from the inside out."
  }
];
