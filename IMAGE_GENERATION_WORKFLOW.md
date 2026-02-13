# Image Generation Workflow

This guide walks you through generating images with DALL-E and managing outputs using the CLI toolkit.

## Why This Works

**Prompting is a form of specification.** When you add details (subject, setting, style, lighting), the model receives clearer constraints and produces more consistent results. Iteration turns vague goals into precise outputs.

The feedback loop between prompt refinement and visual output is the core learning experience.

## Workflow Steps

### Step 1: Start with a Clear Prompt

A strong prompt includes:
- **Subject**: What is the main focus? (lighthouse, astronaut, forest)
- **Setting**: Where does this take place? (stormy sea, outer space, ancient ruins)
- **Style**: How should it look? (cinematic, oil painting, photorealistic, abstract)
- **Lighting**: What's the mood? (dramatic, golden hour, neon, moonlight)
- **Composition**: Camera perspective? (wide angle, close-up, overhead)

#### Example Prompts

**Vague ❌**
```
"A nice lighthouse"
```

**Clear ✅**
```
"A cinematic lighthouse in a storm, wide angle, dramatic lighting, waves crashing, dark stormy clouds, professional photography"
```

**Ultra-Detailed ✅✅**
```
"A dramatic lighthouse standing alone on rocky cliffs during a violent storm, captured with a wide-angle lens, intense lightning illuminating the scene, massive waves crashing against the rocks, dark ominous clouds, photorealistic, cinematic color grading, 4k quality"
```

### Step 2: Generate the Image

Use the CLI command with size and prompt:

```bash
# Default size (1024x1024 - square)
npm run dev -- image-generate "A cinematic lighthouse in a storm"

# Wide format (1792x1024 - landscape)
npm run dev -- image-generate "A cinematic lighthouse in a storm" --size 1792x1024

# Tall format (1024x1792 - portrait)
npm run dev -- image-generate "A cinematic lighthouse in a storm" --size 1024x1792
```

**Available Sizes:**
- `1024x1024` - Square (default)
- `1792x1024` - Landscape/Wide
- `1024x1792` - Portrait/Tall

### Step 3: Review the Output

Images are saved in the `images/` directory with:
- **Filename**: `[prompt-summary]-[size]-[timestamp].png`
- **Metadata**: Stored in console output showing prompt, size, URL, and filename

**What to check:**
- Does the subject match your intention?
- Is the lighting/mood what you imagined?
- Are there any artifacts or confusing elements?
- Does the composition feel balanced?

### Step 4: Iterate Intentionally

**Good iteration patterns:**

#### Pattern 1: Add Clarity
```
Version 1: "A lighthouse in a storm"
Version 2: "A lighthouse on cliffs during a violent thunderstorm, dramatic lighting"
Version 3: "A cinematic lighthouse on rocky cliffs with massive waves during a violent storm, professional photography"
```

#### Pattern 2: Remove Ambiguity
```
Version 1: "A nice robot" ❌ vague
Version 2: "A sleek silver robot in a futuristic city" ✅ clearer
Version 3: "A sleek chrome humanoid robot standing in a neon-lit cyberpunk city, dramatic lighting, cinematic" ✅✅ precise
```

#### Pattern 3: Adjust Composition
```
Version 1: "A forest" 
Version 2: "A dense ancient forest from ground level"
Version 3: "A dense ancient forest from ground level, looking up at towering trees, sunlight filtering through leaves, volumetric lighting"
```

#### Pattern 4: Change Style
```
Version 1: "A castle"
Version 2: "A medieval castle, oil painting style"
Version 3: "A majestic medieval castle at sunset, oil painting style, golden hour lighting, romantic landscape"
```

### Step 5: Capture Learnings

Create a file `PROMPT_ITERATIONS.md` to document your process:

```markdown
# Prompt Iteration Log

## Session 1: Lighthouse Series

### Attempt 1 (Baseline)
- **Prompt**: "A lighthouse in a storm"
- **Size**: 1024x1024
- **Result**: Generic, unclear lighting, no sense of scale
- **Learning**: Added too little context

### Attempt 2 (More Details)
- **Prompt**: "A cinematic lighthouse on cliffs during a violent storm, dramatic lighting, professional photography"
- **Size**: 1792x1024
- **Result**: Better composition, strong lighting, more dramatic
- **Learning**: Landscape format works better for this scene

### Attempt 3 (Refined)
- **Prompt**: "A dramatic lighthouse on rocky cliffs during a violent thunderstorm, captured with a wide-angle lens, intense lightning, massive waves, dark ominous clouds, photorealistic, cinematic"
- **Size**: 1792x1024
- **Result**: Excellent lighting, clear focal point, atmospheric
- **Learning**: Specifying lens type and photography style improves realism
```

## Reflection Prompts

Answer these questions after each iteration:

1. **What detail improved the output the most?**
   - Did adding "cinematic" help?
   - Did specifying "wide-angle" matter?
   - Which adjective made the biggest difference?

2. **What detail introduced confusion?**
   - Did too many descriptors confuse the model?
   - Did conflicting styles clash (e.g., "oil painting" + "photorealistic")?
   - What should be removed next time?

3. **What will you reuse in your next prompt?**
   - Which phrases worked well?
   - Which structure was effective?
   - Build a personal "prompt vocabulary" for future use.

## Best Practices

### ✅ Do

- Use specific, concrete nouns (lighthouse, not "structure")
- Combine style descriptors that complement each other
- Specify lighting conditions explicitly
- Include camera/perspective details
- Use action-oriented language (crashing waves, not "waves")
- Mention quality tier (professional, cinematic, ultra-detailed)

### ❌ Don't

- Use vague adjectives alone (nice, cool, beautiful)
- Combine conflicting styles (photorealistic + cartoon)
- Overload with too many unrelated details
- Assume the model will infer your vision
- Forget to specify size for your use case
- Mix technical photography terms randomly

## Example Workflow: From Vague to Vivid

### Initial Goal
"I want an image of a astronaut"

### Iteration 1: Add Context
```bash
npm run dev -- image-generate "An astronaut in space"
```
**Result**: Generic space background, unclear emotion

### Iteration 2: Add Details
```bash
npm run dev -- image-generate "An astronaut floating in space, looking at Earth, professional photography, cinematic lighting"
```
**Result**: Better perspective, Earth visible, but still generic

### Iteration 3: Add Style & Mood
```bash
npm run dev -- image-generate "An astronaut floating in deep space, looking down at Earth below, golden sunlight reflecting off helmet visor, dramatic cinematic lighting, photorealistic, wide-angle perspective" --size 1792x1024
```
**Result**: Stunning composition, emotional impact, professional quality

### Iteration 4: Fine-tune Specifics
```bash
npm run dev -- image-generate "A lone astronaut in a white spacesuit floating in the vastness of space, Earth glowing below, golden sunlight illuminating the helmet visor, dramatic volumetric lighting, cinematic composition, ultra-detailed, professional space photography" --size 1792x1024
```
**Result**: Refined, emotionally resonant, gallery-quality

## Command Reference

```bash
# Help/examples
npm run dev -- image-generate

# Basic generation
npm run dev -- image-generate "your prompt here"

# With landscape format
npm run dev -- image-generate "your prompt here" --size 1792x1024

# With portrait format
npm run dev -- image-generate "your prompt here" --size 1024x1792

# With square (default)
npm run dev -- image-generate "your prompt here" --size 1024x1024
```

## Output Structure

Generated images are saved with metadata:

```
images/
├── cinematic-lighthouse-storm-1024x1024-2026-02-10t012345.png
├── astronaut-deep-space-earth-1792x1024-2026-02-10t012350.png
└── forest-ancient-trees-1024x1792-2026-02-10t012355.png
```

Each generation logs:
- Original prompt
- Selected size
- Generation timestamp
- Image URL
- Local filename

## Tips for Effective Prompting

### For Photorealism
```
"A [subject] in [setting], professional photography, cinematic lighting, high resolution, ultra-detailed, 4K quality"
```

### For Artistic Styles
```
"A [subject] in [setting], [style] art style, [mood] atmosphere, [composition]"
```

### For Cinematic Scenes
```
"A [subject] in [setting], wide-angle cinematography, dramatic lighting, volumetric effects, cinematic color grading, [emotion/mood]"
```

### For Conceptual/Abstract
```
"A [concept] visualized as [metaphor], [style], [mood], detailed, artistic"
```

## Troubleshooting

**Image doesn't match prompt:**
- Add more specific descriptors
- Remove conflicting style directions
- Specify the photography/art style explicitly

**Output is too generic:**
- Add emotional/atmospheric words
- Include lighting descriptions
- Specify camera lens/perspective

**Style conflicts:**
- Don't mix "photorealistic" with "cartoon"
- Combine complementary styles (cinematic + photorealistic ✓)
- Be consistent with tone

**Unwanted details:**
- Explicitly exclude what you don't want
- Use negative guidance ("without..." phrases)
- Simplify and refocus the prompt

## Next Steps

1. **Create a prompt library**: Document your best-performing prompts
2. **Track iterations**: Compare version 1, 2, 3 side-by-side
3. **Build style vocabulary**: Collect phrases that work well
4. **Experiment with formats**: Try different sizes for different scenes
5. **Share learnings**: Compare results with peers to learn new techniques
