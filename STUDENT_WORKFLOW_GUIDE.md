# Image Generation Workflow - Complete Guide for Students

This is your companion guide for learning prompt engineering through iterative image generation.

## The Core Principle

**Prompting is specification.** The more precisely you describe what you want, the more consistent the results. Iteration—comparing outputs and refining inputs—is how you turn vague ideas into vivid images.

## Your Workflow

### 1. Start Simple

```bash
npm start -- image-generate "A lighthouse"
```

**What to check:**
- Is the subject recognizable?
- Is the mood clear?
- Is there enough detail?
- What's missing?

**Observation:** Your output is probably generic. Good! Now you know what "underspecified" looks like.

### 2. Add Details Incrementally

Add one detail at a time:

```bash
# Now with a storm
npm start -- image-generate "A lighthouse in a storm"

# Now with lighting
npm start -- image-generate "A lighthouse in a storm, dramatic lighting"

# Now with setting
npm start -- image-generate "A lighthouse on cliffs in a storm, dramatic lighting"
```

**What to notice:**
- Each detail changes the output
- Some details matter more than others
- The model responds better to specific descriptions than vague adjectives

### 3. Refine the Details

Upgrade vague words to precise ones:

| ❌ Vague | ✅ Specific |
|----------|-----------|
| "nice" | "photorealistic, professional quality" |
| "cool" | "cinematic, dramatic lighting" |
| "big" | "wide-angle perspective, epic scale" |
| "good" | "detailed, ultra-detailed" |

### 4. Pick the Right Size

Now try all three sizes:

```bash
# Square (default)
npm start -- image-generate "A cinematic lighthouse in a storm" --size 1024x1024

# Landscape (often better for scenery)
npm start -- image-generate "A cinematic lighthouse in a storm" --size 1792x1024

# Portrait (for tall objects)
npm start -- image-generate "A cinematic lighthouse in a storm" --size 1024x1792
```

**Which looked best?** That's your answer for this type of image.

### 5. Document & Compare

Create a file `MY_ITERATIONS.md`:

```markdown
# My Prompt Iterations

## Lighthouse Series

### Attempt 1
- Prompt: "A lighthouse"
- Size: 1024x1024
- Result: Generic, unclear mood
- Learning: Need to specify emotion and lighting

### Attempt 2
- Prompt: "A lighthouse in a storm, dramatic lighting"
- Size: 1024x1024
- Result: Better! But feels cramped
- Learning: This scene needs landscape format

### Attempt 3
- Prompt: "A lighthouse on rocky cliffs in a violent storm, dramatic lighting, photorealistic"
- Size: 1792x1024
- Result: Much better! Professional feel
- Learning: Landscape format works great, photorealistic helps

### Attempt 4
- Prompt: "A cinematic lighthouse on rocky cliffs during a violent thunderstorm, intense lightning, massive waves, dark ominous clouds, photorealistic, professional photography"
- Size: 1792x1024
- Result: Excellent! Looks like a professional photo
- Learning: Specific details (lightning, massive waves) make huge difference
```

## Reflection Framework

After each set of iterations, answer:

### 1. What detail improved the output the most?

Examples:
- Adding "cinematic" changed the whole feel
- Specifying "lightning" made it dramatic
- "Wide-angle" changed the perspective
- "Professional photography" improved the quality

**Your answer:** ___________________________________

### 2. What detail introduced confusion?

Examples:
- Saying both "cartoon" and "photorealistic" confused the model
- Too many details diluted the focus
- Technical jargon didn't help
- Conflicting moods (happy + tragic) made it weird

**Your answer:** ___________________________________

### 3. What will you reuse in your next prompt?

Build your personal "prompt vocabulary":

**Winning phrases I'll use again:**
- For lighting: "dramatic lighting", "golden hour", "neon glow"
- For mood: "cinematic", "photorealistic", "epic"
- For composition: "wide-angle", "close-up", "from above"

**Your list:** ___________________________________

## Practice Series

### Series 1: Landscapes (10-15 minutes)

**Starting prompt:**
```bash
npm start -- image-generate "A forest"
```

**Progressions to try:**
1. Add setting: "A forest at sunset"
2. Add mood: "A peaceful forest at sunset"
3. Add detail: "An ancient forest at sunset with shafts of golden light"
4. Add style: "An ancient forest at sunset with shafts of golden light, oil painting style"
5. Try sizes: Test 1024x1024, 1792x1024, 1024x1792

**Questions:**
- Which size worked best? Why?
- Which phrase made the biggest difference?
- What surprised you?

---

### Series 2: Characters (10-15 minutes)

**Starting prompt:**
```bash
npm start -- image-generate "A wizard"
```

**Progressions to try:**
1. Add setting: "A wizard in a library"
2. Add action: "A wizard casting a spell in a library"
3. Add magic: "A wizard casting a blue spell in an ancient library"
4. Add style: "A wizard casting a blue spell in an ancient library, fantasy illustration style"
5. Add emotion: "A wizard casting a powerful blue spell in an ancient library, determined expression, fantasy illustration style"

**Questions:**
- Did the size matter as much? Why?
- How did adding emotion change the look?
- What was the smallest change that made the biggest difference?

---

### Series 3: Environments (10-15 minutes)

**Starting prompt:**
```bash
npm start -- image-generate "A city"
```

**Progressions to try:**
1. Add mood: "A city at night"
2. Add style: "A cyberpunk city at night"
3. Add detail: "A cyberpunk city at night with neon lights and flying vehicles"
4. Add camera: "A cyberpunk city at night with neon lights and flying vehicles, shot from street level"
5. Add photography: "A cyberpunk city at night with neon lights, professional photography, cinematic lighting"

**Questions:**
- Did camera angle help?
- Which size worked best for this type of scene?
- What's your favorite version?

---

## Troubleshooting Your Workflow

### "All my images look generic"
→ Add more specific details (lighting, mood, photography style)
→ Specify material ("metal", "wooden", "stone")
→ Include a photography type ("professional photography", "film noir")

### "The image doesn't match my prompt"
→ The model might be interpreting words differently
→ Try synonyms ("cinematic" → "epic", "dramatic", "theatrical")
→ Be more specific (not "nice lighting" → "golden hour lighting from the left")

### "The size doesn't seem to matter"
→ It matters more for certain scenes
→ Landscape format better for vistas, environments
→ Portrait format better for tall characters, buildings
→ Square works for balanced compositions

### "I'm not improving"
→ Focus on ONE variable at a time
→ Keep your successful phrases from before
→ Try copying prompts from EXAMPLE_PROMPTS.md to see how they work
→ Check IMAGE_GENERATION_WORKFLOW.md for techniques

## Your Prompt Engineering Checklist

Before generating, ask yourself:

- [ ] Is my subject clear? (What am I depicting?)
- [ ] Is the setting specified? (Where does this happen?)
- [ ] Is the style chosen? (photorealistic? illustration? oil painting?)
- [ ] Is lighting described? (dramatic? golden hour? neon? moonlight?)
- [ ] Is the mood clear? (epic? peaceful? mysterious? dramatic?)
- [ ] Is the size right? (landscape for wide scenes, portrait for tall objects)
- [ ] Did I avoid vague words? (no "nice", "cool", "good")
- [ ] Is there anything that conflicts? (photorealistic + cartoon = confusing)

## Building Your Personal Prompt Library

Create `MY_BEST_PROMPTS.md` and collect your winners:

```markdown
# My Best Prompts

## Landscapes
- "An ancient forest with towering trees, shafts of golden sunlight, volumetric lighting, cinematic" - Works great at 1792x1024

## Characters  
- "A powerful wizard, blue magical energy swirling around staff, determined expression, fantasy illustration style" - Best at 1024x1024

## Environments
- "Cyberpunk city street at night, neon signs, rain-soaked pavement, flying vehicles, professional photography" - Works best at 1792x1024

## Techniques That Worked
- Always specify "dramatic" for action scenes
- "Photorealistic" makes a big difference for realistic subjects
- "Wide-angle" → landscape format, "close-up" → square format
- "Volumetric lighting" adds atmosphere
```

## Deep Dive: The Lighthouse Progression

This is a complete example of the learning process:

### Version 1: Too Vague
```bash
npm start -- image-generate "A lighthouse"
```
**Result:** Small, indistinct, unclear mood
**Learning:** Need context and feeling

### Version 2: Adding Context
```bash
npm start -- image-generate "A lighthouse in a storm"
```
**Result:** Better! But still lacks drama and scale
**Learning:** Storm helps but needs more detail

### Version 3: Adding Specific Details
```bash
npm start -- image-generate "A lighthouse on rocky cliffs in a violent thunderstorm, dramatic lighting"
```
**Result:** Much better! Clear drama and scale
**Learning:** Specific words ("rocky", "violent", "dramatic") matter more than generic ones

### Version 4: Professional Polish
```bash
npm start -- image-generate "A lighthouse on rocky cliffs during a violent thunderstorm, intense lightning illuminating the scene, massive waves crashing, dark ominous clouds, photorealistic, professional photography" --size 1792x1024
```
**Result:** Gallery-quality image!
**Learning:** Specifying photography style + landscape format + all details = excellent result

## Next Level: Comparing Side-by-Side

Generate these two in the same session:

```bash
# Version A: Simple
npm start -- image-generate "A lighthouse"

# Version B: Detailed
npm start -- image-generate "A cinematic lighthouse on rocky cliffs during a thunderstorm, intense lightning, massive waves, dramatic lighting, photorealistic, professional photography" --size 1792x1024
```

Then look at both images in `images/` folder. The difference is huge, right? That's the power of specification.

## Your Challenge

Pick one prompt from EXAMPLE_PROMPTS.md and:
1. Generate it as-is
2. Modify it twice (add details both times)
3. Try all three sizes
4. Document your findings
5. Answer the 3 reflection questions above

**Time: 20-30 minutes**
**Result: Understanding how prompting works**

## Key Takeaway

Every image generation is a mini-experiment. You're not looking for perfection—you're learning how your inputs affect outputs. That feedback loop is where the learning happens.

Good luck, and have fun experimenting! 🎨
