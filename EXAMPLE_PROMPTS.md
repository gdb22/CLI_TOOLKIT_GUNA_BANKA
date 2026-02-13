# Example Prompts for Image Generation

A curated collection of tested prompts for learning effective prompt engineering.

## Category: Landscapes

### Minimalist
```
"A lone tree standing in an empty field at sunset, golden hour lighting, serene and peaceful"
```

### Epic
```
"A dramatic mountain range with snow-capped peaks at sunrise, golden light illuminating the landscape, valley below shrouded in mist, wide-angle cinematography, ultra-detailed, 4K"
```

### Atmospheric
```
"A misty forest with ancient trees, shafts of golden sunlight piercing through the fog, volumetric lighting, moody and mysterious atmosphere, cinematic"
```

**Recommended sizes:**
- `--size 1792x1024` for landscape sweeps
- `--size 1024x1024` for focused scenes

## Category: Sci-Fi

### Space Exploration
```
"An astronaut floating in deep space gazing at Earth below, reflecting off helmet visor, golden sunlight, dramatic cinematic lighting, photorealistic, wide-angle"
```

### Future Cities
```
"A cyberpunk city skyline at night with neon lights and holographic signs, flying vehicles, rain-soaked streets reflecting neon, cinematic composition, ultra-detailed"
```

### Alien Worlds
```
"An alien desert landscape with strange rock formations, twin moons in purple sky, bioluminescent flora, dramatic alien lighting, photorealistic yet otherworldly, cinematic"
```

**Recommended sizes:**
- `--size 1792x1024` for city vistas
- `--size 1024x1024` for character/object focus

## Category: Fantasy

### Medieval Castle
```
"A majestic medieval castle perched on a cliff overlooking a misty valley, golden sunset lighting, dramatic clouds, fantasy landscape, oil painting style, romantic mood"
```

### Dark Fantasy
```
"A gothic cathedral surrounded by ancient twisted trees, stormy dark sky with lightning, eerie atmosphere, dramatic lighting, fantasy illustration style, detailed, moody"
```

### Magic Moment
```
"A wizard casting a spell, magical blue energy swirling around their staff, ancient library setting, warm candlelight, fantasy illustration, detailed, dynamic composition"
```

**Recommended sizes:**
- `--size 1024x1792` for tall castle/architecture
- `--size 1024x1024` for character focus

## Category: Photorealism

### Urban Scene
```
"A rainy city street at night, neon lights reflecting off wet pavement, people with umbrellas walking, professional street photography, cinematic, high resolution, moody"
```

### Nature Photography
```
"A close-up of morning dew on leaves with bokeh forest background, warm golden sunlight, macro photography, shallow depth of field, detailed, photorealistic, 4K"
```

### Architecture
```
"A modern minimalist building with geometric forms, clean lines, concrete and glass, blue hour lighting, professional architectural photography, cinematic perspective"
```

**Recommended sizes:**
- `--size 1024x1024` for square composition
- `--size 1792x1024` for panoramic shots

## Category: Conceptual/Abstract

### Emotion Visualization
```
"Serenity visualized as flowing water and soft light, pastel colors, abstract yet comprehensible, peaceful atmosphere, smooth transitions, detailed"
```

### Technology & Nature
```
"Nature and technology merging together, organic and mechanical elements intertwining, bioluminescence, cinematic lighting, sci-fi illustration style, detailed"
```

### Dreams
```
"A surreal dreamscape with floating islands, impossible architecture, warm glowing light, watercolor painting style, magical atmosphere, ethereal and beautiful"
```

**Recommended sizes:**
- `--size 1024x1024` for balanced composition
- `--size 1024x1792` for vertical flow

## Template Formulas

Use these as starting points:

### Photorealistic Formula
```
"A [subject] in [setting], [time of day] lighting, professional [photography type], cinematic, [mood], ultra-detailed, 4K quality"
```

### Fantasy/Artistic Formula
```
"A [subject] in [setting], [art style] style, [atmosphere], [lighting], detailed, [emotional quality]"
```

### Cinematic Formula
```
"A [subject] in [setting], [camera type] cinematography, [dramatic lighting], [mood], cinematic composition, [environment detail], ultra-detailed"
```

### Conceptual Formula
```
"[Concept] visualized as [metaphor], [visual style], [color scheme], [atmosphere], artistic, detailed"
```

## Testing Workflow

**For each prompt:**

1. **Generate at default size**
   ```bash
   npm run dev -- image-generate "your prompt"
   ```

2. **If it's a landscape, try wide format**
   ```bash
   npm run dev -- image-generate "your prompt" --size 1792x1024
   ```

3. **If it's a portrait/tall scene, try portrait**
   ```bash
   npm run dev -- image-generate "your prompt" --size 1024x1792
   ```

4. **Document your observations:**
   - Which size worked best?
   - What details dominated the output?
   - What surprised you?
   - What would you change?

## Prompt Refinement Examples

Each prompt shows evolution from vague → clear → excellent:

### Evolution 1: Lighthouse
```bash
# Version 1 (Vague)
npm run dev -- image-generate "A lighthouse"

# Version 2 (Better)
npm run dev -- image-generate "A lighthouse in a storm, dramatic lighting"

# Version 3 (Excellent)
npm run dev -- image-generate "A cinematic lighthouse on rocky cliffs during a violent thunderstorm, intense lightning, massive waves, dark ominous clouds, photorealistic, professional photography, wide-angle perspective" --size 1792x1024
```

### Evolution 2: Astronaut
```bash
# Version 1 (Basic)
npm run dev -- image-generate "An astronaut in space"

# Version 2 (With Context)
npm run dev -- image-generate "An astronaut floating in space looking at Earth, professional photography"

# Version 3 (Cinematic)
npm run dev -- image-generate "A lone astronaut floating in deep space gazing at Earth below, golden sunlight reflecting off helmet visor, dramatic cinematic lighting, photorealistic, wide-angle, ultra-detailed" --size 1792x1024
```

### Evolution 3: Forest
```bash
# Version 1 (Generic)
npm run dev -- image-generate "A forest"

# Version 2 (More Detail)
npm run dev -- image-generate "An ancient dense forest with tall trees, sunlight filtering through, peaceful"

# Version 3 (Immersive)
npm run dev -- image-generate "A dense ancient forest viewed from ground level looking up at towering trees, golden sunlight streaming through canopy, volumetric lighting, misty atmosphere, cinematic composition, photorealistic, moody and serene" --size 1024x1792
```

## Common Mistakes & Fixes

| Mistake | Fix | Example |
|---------|-----|---------|
| Vague adjectives | Use specific descriptors | "nice" → "cinematic, dramatic lighting" |
| Conflicting styles | Use complementary styles | ❌ "photorealistic cartoon" → ✅ "cinematic photorealism" |
| Too many details | Focus & prioritize | Narrow down to 3-4 key elements |
| No lighting specified | Always mention lighting | Add "dramatic lighting", "golden hour", "neon glow" |
| Wrong size | Match size to composition | Landscapes → wide, portraits → tall |
| Forgetting art style | Specify clearly | Add "oil painting", "photography", "illustration" |

## Tips for Best Results

1. **Be specific**: "dramatic sunset" not "nice colors"
2. **Include photography/art style**: "professional photography" or "oil painting"
3. **Specify lighting**: "golden hour", "neon", "candlelight"
4. **Mention mood**: "serene", "epic", "mysterious"
5. **Choose size intentionally**: Landscape → 1792x1024, Portrait → 1024x1792
6. **Use quality descriptors**: "ultra-detailed", "cinematic", "4K quality"
7. **Be visual**: The model responds to visual descriptions
8. **Test variations**: Try 2-3 size options to find what works

## Getting Started

Pick one prompt and generate:

```bash
# Easy start - Landscape
npm run dev -- image-generate "A misty forest with ancient trees, golden sunlight piercing through fog, volumetric lighting, cinematic" --size 1792x1024

# Easy start - Character
npm run dev -- image-generate "A wizard casting a spell, magical blue energy, ancient library, fantasy illustration style" --size 1024x1024

# Easy start - Space
npm run dev -- image-generate "An astronaut floating in space gazing at Earth, golden sunlight, cinematic, photorealistic, wide-angle" --size 1792x1024
```

Review the output in `images/` and refine from there!
