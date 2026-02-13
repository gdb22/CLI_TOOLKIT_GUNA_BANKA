# CLI AI Toolkit - Image Generation Workflow Complete Reference

## 🎯 Quick Links by Role

### For Students Getting Started
1. **[QUICKSTART_IMAGE_GENERATION.md](QUICKSTART_IMAGE_GENERATION.md)** (5 min)
   - One-minute test commands
   - Size quick reference
   - Where images are saved

2. **[STUDENT_WORKFLOW_GUIDE.md](STUDENT_WORKFLOW_GUIDE.md)** (30 min)
   - Step-by-step learning workflow
   - Three practice series
   - Reflection framework
   - Personal documentation templates

3. **[EXAMPLE_PROMPTS.md](EXAMPLE_PROMPTS.md)** (Reference)
   - 20+ example prompts by category
   - Evolution examples (vague → excellent)
   - Template formulas
   - Common mistakes & fixes

### For Instructors
- [IMAGE_GENERATION_WORKFLOW.md](IMAGE_GENERATION_WORKFLOW.md) - Teaching material
- [IMAGE_GENERATION_WORKFLOW_IMPLEMENTATION.md](IMAGE_GENERATION_WORKFLOW_IMPLEMENTATION.md) - Technical details
- [README.md](README.md) - Full project setup

## 📚 Documentation Files

### README.md
**Purpose:** Main project documentation  
**Audience:** Everyone  
**Key Sections:**
- Project overview and features
- Installation and setup
- All command references
- Development workflow
- Troubleshooting

### QUICKSTART_IMAGE_GENERATION.md  
**Purpose:** Get started in 5 minutes  
**Audience:** Beginners  
**Contains:**
- Copy-paste test commands
- Size reference table
- Iteration example (lighthouse)
- Common command patterns
- Where images are saved

### STUDENT_WORKFLOW_GUIDE.md
**Purpose:** Complete learning guide  
**Audience:** Students  
**Contains:**
- The core principle (prompting = specification)
- Your workflow (5 steps)
- Reflection framework (3 key questions)
- 3 practice series with questions
- Troubleshooting guide
- Prompt checklist
- Personal library building
- Deep dive example
- Challenge exercise

### IMAGE_GENERATION_WORKFLOW.md
**Purpose:** Comprehensive technique guide  
**Audience:** Students & Instructors  
**Contains:**
- Why prompting works
- 5-step workflow with examples
- 4 iteration patterns
- Reflection prompts
- Best practices (do's & don'ts)
- Example workflow (vague to vivid)
- Troubleshooting
- Project workflow
- Tips for different styles
- Command reference

### EXAMPLE_PROMPTS.md
**Purpose:** Curated prompt collection  
**Audience:** Everyone  
**Contains:**
- Landscapes (minimalist, epic, atmospheric)
- Sci-Fi (space, cities, alien worlds)
- Fantasy (medieval, dark, magic)
- Photorealism (urban, nature, architecture)
- Conceptual/Abstract
- Template formulas (4 types)
- Testing workflow
- Prompt refinement examples (3 progressions)
- Common mistakes table
- Tips for best results
- Getting started picks

### IMAGE_GENERATION_WORKFLOW_IMPLEMENTATION.md
**Purpose:** Technical implementation details  
**Audience:** Developers  
**Contains:**
- What was built
- Key features
- Documentation structure
- Learning objectives
- Technical implementation
- Build status
- How to use this
- Next steps for extensions

## 🚀 Command Reference

### Help
```bash
npm start
npm start -- image-generate
```

### Generate Image (Default)
```bash
npm start -- image-generate "your prompt here"
# Size: 1024x1024 (square)
```

### Generate with Landscape Format
```bash
npm start -- image-generate "your prompt" --size 1792x1024
# Best for: wide vistas, environments, landscapes
```

### Generate with Portrait Format
```bash
npm start -- image-generate "your prompt" --size 1024x1792
# Best for: tall characters, architectures, vertical flow
```

## 📊 Size Selection Guide

| Format | Size | Best For | Example Use |
|--------|------|----------|------------|
| Square | 1024x1024 | Balanced composition | Character portraits, icons, focused subjects |
| Landscape | 1792x1024 | Wide scenes | Environments, vistas, sweeping landscapes |
| Portrait | 1024x1792 | Tall scenes | Tall characters, buildings, vertical compositions |

## 🎓 Learning Path

### Step 1: Understand the Principle (5 min)
Read: "The Core Principle" section in STUDENT_WORKFLOW_GUIDE.md

### Step 2: Test a Command (2 min)
Run: One of the one-minute test commands from QUICKSTART_IMAGE_GENERATION.md

### Step 3: Try an Example (5 min)
Pick: One prompt from EXAMPLE_PROMPTS.md  
Generate: `npm start -- image-generate "prompt"` → check `images/` folder

### Step 4: Try All Sizes (5 min)
Generate: Same prompt with all three sizes  
Compare: Which looked best?

### Step 5: Do a Practice Series (15-20 min)
Choose: One series from STUDENT_WORKFLOW_GUIDE.md  
Follow: The progression steps  
Document: What you learned

### Step 6: Deep Understanding (30 min)
Read: IMAGE_GENERATION_WORKFLOW.md  
Refer: To EXAMPLE_PROMPTS.md while reading  
Connect: Ideas to your practice series

### Step 7: Build Your Library (Ongoing)
Create: MY_BEST_PROMPTS.md  
Document: Successful phrases  
Build: Personal prompt vocabulary

**Total Time: 1-2 hours for full understanding**

## ❓ Reflection Questions

After completing practice, answer:

### 1. What detail improved the output the most?
- Did a specific word make the biggest difference?
- Was it the size selection?
- Was it the style descriptor?
- Was it the lighting specification?

### 2. What detail introduced confusion?
- Did something conflict with something else?
- Did you use too many unrelated descriptors?
- Did the model misinterpret something?

### 3. What will you reuse in your next prompt?
- What phrases worked well?
- What structure was effective?
- What's your new personal vocabulary?

## 📁 Project Structure

```
cli_ai_toolkit/
├── src/
│   ├── commands/
│   │   ├── image-generate.ts    ← Updated with size support
│   │   ├── web-search.ts
│   │   └── gemini.ts
│   ├── services/
│   │   ├── openai.ts            ← Updated with size parameter
│   │   └── gemini.ts
│   ├── utils/
│   │   ├── args.ts              ← NEW: Argument parsing
│   │   ├── helpers.ts
│   │   └── registry.ts
│   └── index.ts
├── images/                       ← Generated images saved here
│   └── [prompt-size-timestamp].png
├── references/                   ← Search results saved here
├── dist/                         ← Compiled JavaScript
│
├── Documentation:
├── README.md                     ← Main project doc
├── QUICKSTART_IMAGE_GENERATION.md
├── STUDENT_WORKFLOW_GUIDE.md
├── IMAGE_GENERATION_WORKFLOW.md
├── EXAMPLE_PROMPTS.md
├── IMAGE_GENERATION_WORKFLOW_IMPLEMENTATION.md
└── DOCUMENTATION_INDEX.md        ← This file
```

## 🔧 Technical Details

### What's New in This Update

**Modified Files:**
- `src/services/openai.ts` - Added `size` parameter to `generateImage()`
- `src/commands/image-generate.ts` - Complete rewrite with argument parsing

**New Files:**
- `src/utils/args.ts` - Command-line argument parsing utilities

**New Documentation:**
- QUICKSTART_IMAGE_GENERATION.md
- STUDENT_WORKFLOW_GUIDE.md
- IMAGE_GENERATION_WORKFLOW_IMPLEMENTATION.md
- DOCUMENTATION_INDEX.md (this file)

### Image Output Format

```
images/
├── misty-forest-ancient-trees-1792x1024-2026-02-10t123456.png
├── astronaut-space-earth-1792x1024-2026-02-10t123457.png
└── wizard-spell-library-1024x1024-2026-02-10t123458.png
```

Filename pattern: `[prompt-summary]-[size]-[timestamp].png`

Each generation logs metadata to console:
- Original prompt
- Selected size
- Generation timestamp
- Image URL
- Local filename

## 🎯 Use Cases

### For Self-Learning
1. Pick a topic from EXAMPLE_PROMPTS.md
2. Generate images at all three sizes
3. Document observations
4. Answer reflection questions
5. Build your prompt library

### For Classroom
1. Show QUICKSTART_IMAGE_GENERATION.md to get started quickly
2. Use IMAGE_GENERATION_WORKFLOW.md as teaching material
3. Have students follow STUDENT_WORKFLOW_GUIDE.md
4. Use practice series as homework
5. Grade based on reflection answers

### For Experimentation
1. Start with EXAMPLE_PROMPTS.md as reference
2. Modify one prompt at a time
3. Compare outputs side-by-side
4. Document what works
5. Share learnings with peers

## 🆘 Troubleshooting

**Images are generic?**
→ Read: Best Practices section in IMAGE_GENERATION_WORKFLOW.md

**Don't know what to prompt?**
→ Use: EXAMPLE_PROMPTS.md as templates

**Not sure if you're improving?**
→ Follow: The 3 practice series in STUDENT_WORKFLOW_GUIDE.md

**Want to understand deeper?**
→ Read: IMAGE_GENERATION_WORKFLOW.md completely

**Technical issues?**
→ See: README.md Troubleshooting section

## 📖 Recommended Reading Order

**First Visit (30 minutes):**
1. QUICKSTART_IMAGE_GENERATION.md (5 min)
2. Run test command (2 min)
3. STUDENT_WORKFLOW_GUIDE.md - "The Core Principle" section (5 min)
4. Try one example from EXAMPLE_PROMPTS.md (10 min)
5. Try all three sizes (8 min)

**Second Visit (45 minutes):**
1. One practice series from STUDENT_WORKFLOW_GUIDE.md (20 min)
2. Reference EXAMPLE_PROMPTS.md while practicing (ongoing)
3. Document your observations (15 min)
4. Answer the 3 reflection questions (10 min)

**Deep Learning (60 minutes):**
1. Read IMAGE_GENERATION_WORKFLOW.md completely (30 min)
2. Re-read your favorite practice series (10 min)
3. Create MY_BEST_PROMPTS.md library (15 min)
4. Plan next experiments (5 min)

## ✅ Verification Checklist

Before you start, verify:

- [ ] Node.js installed: `node --version`
- [ ] Dependencies installed: `npm list openai dotenv`
- [ ] API keys configured: Check `.env` file exists
- [ ] Build works: `npm run build` completes without errors
- [ ] CLI responds: `npm start` shows commands list
- [ ] images/ folder exists and is writable
- [ ] Documentation files are present

## 🎁 What You'll Learn

By working through this toolkit:

1. **Prompting is Specification** - Clarity drives consistency
2. **Iteration Matters** - Feedback loops transform vague → vivid
3. **Details Are Powerful** - One word can change everything
4. **Vocabulary Builds** - You develop a personal style
5. **Practice Improves** - Each iteration teaches something
6. **Documentation Helps** - Capturing learnings multiplies value

## 🚀 Next Steps After Completing

- Build a prompt library for your favorite style
- Compare results with classmates
- Document your best-performing phrases
- Experiment with combining styles
- Help others with prompt suggestions
- Explore other AI tools with improved prompting skills

---

**Happy Generating! 🎨**

For questions, see README.md or revisit the relevant documentation file above.
