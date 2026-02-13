# Quick Start: Image Generation

This file contains quick-copy prompts to get started immediately.

## One-Minute Test

Copy and paste one of these to test immediately:

### Landscape Test
```bash
npm start -- image-generate "A misty forest with ancient trees, golden sunlight piercing through fog, volumetric lighting, cinematic" --size 1792x1024
```

### Character Test
```bash
npm start -- image-generate "A wizard casting a spell with blue magical energy, ancient library setting, fantasy illustration, detailed" --size 1024x1024
```

### Space Test
```bash
npm start -- image-generate "An astronaut floating in space gazing at Earth below, golden sunlight reflecting off helmet, cinematic photorealistic, wide-angle" --size 1792x1024
```

## Size Quick Reference

| Format | Size Flag | Best For | Use Case |
|--------|-----------|----------|----------|
| Square | `1024x1024` | Balanced | Character focus, portraits, icons |
| Landscape | `1792x1024` | Wider vistas | Scenery, environments, vistas |
| Portrait | `1024x1792` | Tall scenes | Tall characters, architectures, vertical flow |

## Iteration Example: Lighthouse

**Step 1: Start simple**
```bash
npm start -- image-generate "A lighthouse"
```

**Step 2: Add context**
```bash
npm start -- image-generate "A lighthouse in a storm, dramatic lighting"
```

**Step 3: Be cinematic**
```bash
npm start -- image-generate "A cinematic lighthouse on rocky cliffs during a violent thunderstorm, intense lightning, massive waves, dark ominous clouds, photorealistic, professional photography" --size 1792x1024
```

**Step 4: Fine-tune**
```bash
npm start -- image-generate "A dramatic lighthouse standing on rocky cliffs during a violent storm, captured with a wide-angle lens, intense lightning illuminating the scene, massive waves crashing, dark ominous clouds, photorealistic, cinematic, professional photography, 4K quality" --size 1792x1024
```

## Where Are My Images?

All generated images are saved in: `images/`

Filenames follow the pattern: `[prompt-summary]-[size]-[timestamp].png`

Example:
- `misty-forest-ancient-trees-1792x1024-2026-02-10t012345.png`
- `astronaut-space-earth-1792x1024-2026-02-10t012350.png`

## Full Documentation

For comprehensive guides, see:
- [IMAGE_GENERATION_WORKFLOW.md](IMAGE_GENERATION_WORKFLOW.md) - Detailed prompt engineering techniques
- [EXAMPLE_PROMPTS.md](EXAMPLE_PROMPTS.md) - Organized by category with evolution examples

## Common Command Patterns

### Generate and review
```bash
npm start -- image-generate "your prompt here"
open images/  # macOS
explorer images\  # Windows
```

### Try different sizes for same prompt
```bash
npm start -- image-generate "your prompt" --size 1024x1024
npm start -- image-generate "your prompt" --size 1792x1024
npm start -- image-generate "your prompt" --size 1024x1792
```

### Compare iterations
Generate version 1, then refine and generate version 2, then compare in `images/` folder.

## Tips

1. **Start simple, then refine** - Begin with basic prompt, then add details
2. **Specify lighting explicitly** - Makes huge difference (golden hour, neon, dramatic, etc.)
3. **Include art style** - "photorealistic", "oil painting", "illustration" matters
4. **Choose size strategically** - Wide for landscapes, portrait for tall objects
5. **Document what works** - Keep notes on phrases that produce great results
6. **Iterate intentionally** - Change one thing at a time to understand impact

## Getting Help

See error messages? Check:
1. Are you in the right directory? `cd cli_ai_toolkit`
2. Have you installed? `npm install` 
3. Do you have API keys? Check `.env` file
4. Is the syntax right? See "Common Command Patterns" above

For detailed troubleshooting, see [README.md](README.md#troubleshooting)
