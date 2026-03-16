/**
 * Built-in sample templates demonstrating MCN Handlebars helpers.
 * Each sample has a name and a template string.
 * Data is loaded separately from the data/ folder.
 */

export const SAMPLES = [
  {
    name: '— Select a template —',
    template: '',
  },
  {
    name: 'Hello World',
    template: `<p>Hello, {{firstName}} {{lastName}}!</p>
<p>Your email is {{email}}.</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'if / else if / else',
    template: `{{#if (compare score ">=" 90)}}
  <p>Grade: A</p>
{{else if (compare score ">=" 80)}}
  <p>Grade: B</p>
{{else if (compare score ">=" 70)}}
  <p>Grade: C</p>
{{else}}
  <p>Grade: F</p>
{{/if}}`,
    dataFile: 'sample-basic',
  },
  {
    name: 'unless',
    template: `{{#unless isLoggedIn}}
  <p>Please <a href="#">log in</a> to continue.</p>
{{else}}
  <p>Welcome back, {{firstName}}!</p>
{{/unless}}`,
    dataFile: 'sample-basic',
  },
  {
    name: 'iif (ternary)',
    template: `<p>Status: {{iif isActive "Active" "Inactive"}}</p>
<p>Greeting: {{iif (compare score ">=" 50) "Pass" "Fail"}}</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'String: concat / uppercase / lowercase / trim',
    template: `<p>Full name: {{concat firstName " " lastName}}</p>
<p>Uppercase: {{uppercase firstName}}</p>
<p>Lowercase: {{lowercase lastName}}</p>
<p>Trimmed: "{{trim paddedText}}"</p>
<p>ProperCase: {{properCase (lowercase "MARKETING CLOUD NEXT")}}</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'String: substring / replace / indexOf / char',
    template: `{{! substring uses 1-based indexing }}
<p>Chars 2–4 of "hello": {{substring "hello" 2 3}}</p>
<p>Replace "o" → "0": {{replace "hello world" "o" "0"}}</p>
<p>indexOf "world": {{indexOf "hello world" "world"}}</p>
<p>char(65): {{char 65}}</p>
<p>char(65602, 3): {{char 65602 3}}</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'each (loop over list)',
    template: `<ul>
{{#each products}}
  <li>{{@index}}. {{name}} — \${{price}}
    {{#if @first}} ← first{{/if}}
    {{#if @last}} ← last{{/if}}
  </li>
{{/each}}
</ul>`,
    dataFile: 'sample-list',
  },
  {
    name: 'filter',
    template: `<h3>Products over $20:</h3>
<ul>
{{#each (filter products "price" ">" 20 "number")}}
  <li>{{name}} — \${{price}}</li>
{{/each}}
</ul>

<h3>Names containing "Pro":</h3>
<ul>
{{#each (filter products "name" "CONTAINS" "Pro" "string")}}
  <li>{{name}}</li>
{{/each}}
</ul>`,
    dataFile: 'sample-list',
  },
  {
    name: 'sort',
    template: `<h3>Products sorted by price (asc):</h3>
<ul>
{{#each (sort products "price" "asc" "number")}}
  <li>{{name}} — \${{price}}</li>
{{/each}}
</ul>

<h3>Products sorted by name (desc):</h3>
<ul>
{{#each (sort products "name" "desc" "string")}}
  <li>{{name}}</li>
{{/each}}
</ul>`,
    dataFile: 'sample-list',
  },
  {
    name: 'map / slice / flatten',
    template: `<p>All names: {{#each (map products "name")}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}</p>

<p>First 2 products (slice 0–2):</p>
<ul>
{{#each (slice products 0 2)}}
  <li>{{name}}</li>
{{/each}}
</ul>

<p>Last 2 products (slice -2):</p>
<ul>
{{#each (slice products -2)}}
  <li>{{name}}</li>
{{/each}}
</ul>

<p>Flattened tags: {{#each (flatten tagGroups)}}{{this}} {{/each}}</p>`,
    dataFile: 'sample-list',
  },
  {
    name: 'get',
    template: `<p>First product: {{get products 0}}</p>
<p>Third product name: {{get (map products "name") 2}}</p>
<p>Config value: {{get config "theme"}}</p>`,
    dataFile: 'sample-list',
  },
  {
    name: 'repeat (with @index/@first/@last)',
    template: `<ol>
{{#repeat 5}}
  <li>Item {{@index}}
    {{#if @first}}(first){{/if}}
    {{#if @last}}(last){{/if}}
  </li>
{{/repeat}}
</ol>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'set (local variables)',
    template: `{{#set greeting="Hello" punctuation="!"}}
  <p>{{greeting}}, {{firstName}}{{punctuation}}</p>
  <p>Original: {{lastName}}</p>
{{/set}}

{{#set discount=0.1}}
  {{#set finalPrice=(fallback null 99.99)}}
    <p>Base: \${{score}}</p>
  {{/set}}
{{/set}}`,
    dataFile: 'sample-basic',
  },
  {
    name: 'with (context switching)',
    template: `{{#with address}}
  <p>{{street}}</p>
  <p>{{city}}, {{state}} {{zip}}</p>
  <p>Back to root: {{@root.firstName}} {{@root.lastName}}</p>
{{/with}}`,
    dataFile: 'sample-basic',
  },
  {
    name: 'fallback',
    template: `<p>Name: {{fallback nickname firstName}}</p>
<p>Email: {{fallback missingField "no-email@example.com"}}</p>
<p>Score: {{fallback score 0}}</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'compare / equals / and / or / not',
    template: `<p>score > 50: {{compare score ">" 50}}</p>
<p>score == 85: {{equals score 85 "number"}}</p>
<p>isActive AND score > 50: {{and isActive (compare score ">" 50)}}</p>
<p>not isActive: {{not isActive}}</p>
<p>score < 0 OR score > 100: {{or (compare score "<" 0) (compare score ">" 100)}}</p>

{{#compare score ">=" 80}}
  <p>High score!</p>
{{else}}
  <p>Keep practicing.</p>
{{/compare}}`,
    dataFile: 'sample-basic',
  },
  {
    name: 'isEmpty / isNull',
    template: `<p>isEmpty(null): {{isEmpty missingField}}</p>
<p>isEmpty(""): {{isEmpty emptyString}}</p>
<p>isEmpty([]): {{isEmpty emptyList}}</p>
<p>isEmpty(products): {{isEmpty products}}</p>
<p>isNull(null): {{isNull missingField}}</p>
<p>isNull(0): {{isNull score}}</p>

{{#isEmpty nickname}}
  <p>No nickname set — using firstName: {{firstName}}</p>
{{else}}
  <p>Nickname: {{nickname}}</p>
{{/isEmpty}}`,
    dataFile: 'sample-list',
  },
  {
    name: 'format / formatCurrency / formatNumber',
    template: `<p>Date (yyyy-MM-dd): {{format orderDate "yyyy-MM-dd" "date"}}</p>
<p>Date (MMMM d, yyyy): {{format orderDate "MMMM d, yyyy" "date"}}</p>
<p>Number (N2): {{format price "N2" "numeric"}}</p>
<p>Number (F4): {{format price "F4" "numeric"}}</p>
<p>FormatCurrency: {{formatCurrency price "USD" "en-US"}}</p>
<p>FormatNumber (N0): {{formatNumber price "N0" "en-US"}}</p>`,
    dataFile: 'sample-list',
  },
  {
    name: 'now',
    template: `<p>Current time (CST): {{now}}</p>
<p>Formatted: {{format (now) "MMMM d, yyyy" "date"}}</p>`,
    dataFile: 'sample-basic',
  },
  {
    name: 'length',
    template: `<p>Length of firstName: {{length firstName}}</p>
<p>Length of products array: {{length products}}</p>
<p>Length of 12345: {{length 12345}}</p>`,
    dataFile: 'sample-list',
  },
  {
    name: 'Math: add / subtract / multiply / divide / modulo / Random',
    template: `<h3>Basic Arithmetic</h3>
<p>add(10, 5.75) = {{add 10 5.75}}</p>
<p>subtract(100, 37.5) = {{subtract 100 37.5}}</p>
<p>multiply(9.5, 2) = {{multiply 9.5 2}}</p>
<p>divide(22, 7) = {{divide 22 7}}</p>
<p>modulo(17, 5) = {{modulo 17 5}}</p>
<p>Random(1, 100) = {{Random 1 100}}</p>

<h3>Applied to Data</h3>
<p>Unit price: \${{price}}</p>
<p>Price + tax (8%): \${{multiply price 1.08}}</p>
<p>20% discount: \${{multiply price 0.8}}</p>
<p>Items / 2: {{divide (length products) 2}}</p>

<h3>Math in Conditionals</h3>
{{#if (compare (modulo score 2) "==" 0)}}
  <p>Score {{score}} is even.</p>
{{else}}
  <p>Score {{score}} is odd.</p>
{{/if}}`,
    dataFile: 'sample-list',
  },
  {
    name: 'Chained: filter → sort → map',
    template: `{{! Filter products over $20, sort by price desc, then show names }}
<h3>Premium products (>$20), sorted by price desc:</h3>
<ul>
{{#each (map (sort (filter products "price" ">" 20 "number") "price" "desc" "number") "name")}}
  <li>{{this}}</li>
{{/each}}
</ul>`,
    dataFile: 'sample-list',
  },

  // ── Training samples (one per helper category) ──────────────────────────────

  {
    name: '🎓 Training: Object & List',
    template: `<h2>Object &amp; List Functions</h2>

<h3>each — iterate the subscribers array</h3>
<ul>
{{#each subscribers}}
  <li>{{@index}}: {{firstName}} {{lastName}} ({{tier}}){{#if @last}} ← last{{/if}}</li>
{{/each}}
</ul>

<h3>filter — active Gold/Platinum members with score &gt; 75</h3>
<ul>
{{#each (filter (filter subscribers "active" "==" true) "score" ">" 75 "number")}}
  <li>{{firstName}} {{lastName}} — score {{score}}</li>
{{/each}}
</ul>

<h3>flatten — all regions in one list</h3>
<p>{{flatten regionGroups}}</p>
<ul>
{{#each (flatten regionGroups)}}
  <li>{{this}}</li>
{{/each}}
</ul>

<h3>get — by index and by key</h3>
<p>First featured SKU (index 0): {{get featuredSkus 0}}</p>
<p>Third featured SKU (index 2): {{get featuredSkus 2}}</p>
<p>Product for SKU-001: {{get productLookup "SKU-001"}}</p>
<p>Product for SKU-004: {{get productLookup "SKU-004"}}</p>

<h3>map — extract a single field from each object</h3>
<p>All tiers: {{map subscribers "tier"}}</p>
<p>All scores: {{map subscribers "score"}}</p>

<h3>slice — subset of an array (0-based)</h3>
<p>First 3 SKUs: {{slice featuredSkus 0 3}}</p>
<p>Last 2 SKUs (negative index): {{slice featuredSkus -2}}</p>
<p>Middle 2 subscribers:</p>
<ul>
{{#each (slice subscribers 2 4)}}
  <li>{{firstName}} {{lastName}}</li>
{{/each}}
</ul>`,
    dataFile: 'training-object-list',
  },

  {
    name: '🎓 Training: String',
    template: `<h2>String Functions</h2>

<h3>char — Unicode character from decimal code</h3>
<p>char(8226) bullet: {{char bulletChar}}</p>
<p>char(9733) star: {{char starChar}}</p>
<p>char(65) repeated 5 times: {{char 65 repeatCount}}</p>
<p>Divider (char 45 × 20): {{char dividerCode 20}}</p>

<h3>concat — join values into a string</h3>
<p>{{concat firstName " " lastName}}</p>
<p>{{concat "mailto:" email}}</p>
<p>{{concat promoCode " — use at " domain}}</p>

<h3>indexOf — find position of a substring (0-based, -1 if not found)</h3>
<p>indexOf "Cloud" in bio: {{indexOf bio searchTerm}}</p>
<p>indexOf "@" in email: {{indexOf email "@"}}</p>
<p>indexOf "xyz" (not found): {{indexOf bio "xyz"}}</p>

<h3>lowercase / uppercase</h3>
<p>lowercase(lastName): {{lowercase lastName}}</p>
<p>uppercase(firstName): {{uppercase firstName}}</p>
<p>uppercase(tagline): {{uppercase tagline}}</p>

<h3>properCase — capitalise each word</h3>
<p>properCase(tagline): {{properCase tagline}}</p>
<p>properCase(city): {{properCase city}}</p>
<p>properCase(country): {{properCase country}}</p>

<h3>replace — all occurrences, case-sensitive</h3>
<p>replace "Cloud" → "Commerce": {{replace bio searchTerm replacement}}</p>
<p>replace "-" → " ": {{replace productCode "-" " "}}</p>
<p>Uppercase SKU: {{uppercase (replace sku "-" "_")}}</p>

<h3>substring — 1-based start index</h3>
<p>substring(email, 1, 5) first 5 chars: {{substring email 1 5}}</p>
<p>substring(productCode, 5) from char 5 onward: {{substring productCode 5}}</p>
<p>Domain from email (after @): {{substring email (add (indexOf email "@") 2)}}</p>

<h3>trim — strip leading/trailing whitespace</h3>
<p>Before: "{{paddedText}}"</p>
<p>After trim: "{{trim paddedText}}"</p>
<p>concat + trim: "{{trim (concat "  " firstName "  ")}}"</p>`,
    dataFile: 'training-string',
  },

  {
    name: '🎓 Training: Date & Time',
    template: `<h2>Date &amp; Time Functions</h2>

<h3>now — current timestamp in CST (UTC-6, no DST)</h3>
<p>Raw now: {{now}}</p>

<h3>format (type: "date") — format a date string</h3>
<p>Event start (raw): {{eventStart}}</p>
<p>Long date: {{format eventStart "MMMM d, yyyy" "date"}}</p>
<p>Short date: {{format eventStart "M/d/yyyy" "date"}}</p>
<p>With time: {{format eventStart "MMM d, yyyy h:mm tt" "date"}}</p>
<p>ISO-style: {{format eventStart "yyyy-MM-dd" "date"}}</p>
<p>Day of week + date: {{format eventStart "dddd, MMMM d" "date"}}</p>

<h3>Event details</h3>
<p>{{eventName}}</p>
<p>Starts: {{format eventStart "MMMM d, yyyy" "date"}}</p>
<p>Ends: {{format eventEnd "MMMM d, yyyy" "date"}}</p>
<p>Registration deadline: {{format registrationDeadline "MMMM d, yyyy" "date"}}</p>

<h3>Member &amp; purchase dates</h3>
<p>Member since: {{format memberSince "MMMM yyyy" "date"}}</p>
<p>Last purchase: {{format lastPurchase "MMM d, yyyy" "date"}}</p>
<p>Invoice date: {{format invoiceDate "MM/dd/yyyy" "date"}}</p>

<h3>Combining now with format</h3>
<p>Today (formatted): {{format (now) "MMMM d, yyyy" "date"}}</p>
<p>Current month/year: {{format (now) "MMMM yyyy" "date"}}</p>`,
    dataFile: 'training-datetime',
  },

  {
    name: '🎓 Training: Comparison',
    template: `<h2>Comparison Functions</h2>

<h3>if / else if / else — basic branching</h3>
{{#if active}}
  <p>✅ {{firstName}} is an active member.</p>
{{else}}
  <p>❌ {{firstName}} is inactive.</p>
{{/if}}

{{#if (compare tier "==" "Platinum")}}
  <p>🏆 Platinum tier — top rewards apply.</p>
{{else if (compare tier "==" "Gold")}}
  <p>🥇 Gold tier — standard rewards apply.</p>
{{else}}
  <p>🥈 Silver tier — base benefits apply.</p>
{{/if}}

<h3>unless</h3>
{{#unless hasOptedIn}}
  <p>⚠️ {{firstName}} has not opted in to communications.</p>
{{else}}
  <p>📧 Communications enabled.</p>
{{/unless}}

<h3>compare — numeric and string comparisons</h3>
<p>score > 90: {{compare score ">" 90}}</p>
<p>score >= 78: {{compare score ">=" 78}}</p>
<p>age < 30: {{compare age "<" 30}}</p>
<p>lastLoginDays <= inactiveThreshold: {{compare lastLoginDays "<=" inactiveThreshold}}</p>
<p>tier != "Silver": {{compare tier "!=" "Silver"}}</p>

<h3>equals — with type coercion</h3>
<p>score equals numericString (number): {{equals score numericString "number"}}</p>
<p>score equals numericString (string): {{equals score numericString "string"}}</p>
<p>tier equals "Platinum" (string): {{equals tier "Platinum" "string"}}</p>

<h3>and / or / not</h3>
<p>active AND verified: {{and active verified}}</p>
<p>active AND hasOptedIn: {{and active hasOptedIn}}</p>
<p>hasOptedIn OR verified: {{or hasOptedIn verified}}</p>
<p>not(active): {{not active}}</p>
<p>not(hasOptedIn): {{not hasOptedIn}}</p>

{{#and active verified}}
  <p>✅ Account is active and verified — full personalisation enabled.</p>
{{/and}}

{{#or (compare score ">" loyaltyThreshold) (compare tier "==" "Platinum")}}
  <p>🎁 Eligible for bonus reward.</p>
{{/or}}

<h3>iif — inline ternary (both branches always evaluated)</h3>
<p>Status: {{iif active "Active" "Inactive"}}</p>
<p>Opted-in label: {{iif hasOptedIn "Subscribed" "Unsubscribed"}}</p>
<p>Points label: {{iif (compare loyaltyPoints ">" loyaltyThreshold) "VIP" "Standard"}}</p>

<h3>isEmpty / isNull</h3>
<p>isNull(nickname): {{isNull nickname}}</p>
<p>isEmpty(bio): {{isEmpty bio}}</p>
<p>isEmpty(tags): {{isEmpty tags}}</p>
<p>isEmpty(interests): {{isEmpty interests}}</p>
<p>isNull(promoCode): {{isNull promoCode}}</p>
<p>isNull(referralCode): {{isNull referralCode}}</p>`,
    dataFile: 'training-comparison',
  },

  {
    name: '🎓 Training: Utility',
    template: `<h2>Utility Functions</h2>

<h3>fallback — return fallback if value is null/empty</h3>
<p>Name: {{fallback nickname firstName}}</p>
<p>Promo label: {{fallback emptyField "No promo active"}}</p>
<p>Non-null value passes through: {{fallback firstName fallbackName}}</p>

<h3>format (date type)</h3>
<p>Order date (raw): {{orderDate}}</p>
<p>Order date (long): {{format orderDate "MMMM d, yyyy" "date"}}</p>
<p>Event date: {{format eventDate "MMM d, yyyy" "date"}}</p>

<h3>formatCurrency</h3>
<p>Spend: {{formatCurrency spend currency locale}}</p>
<p>Conversion rate: {{formatCurrency conversionRate "USD" "en-US"}}</p>

<h3>formatNumber</h3>
<p>Score (N0): {{formatNumber score "N0"}}</p>
<p>Loyalty points (N0): {{formatNumber loyaltyPoints "N0" locale}}</p>
<p>Tax rate (P1): {{formatNumber taxRate "P1"}}</p>

<h3>length — char count or array count</h3>
<p>Length of firstName: {{length firstName}}</p>
<p>Length of bio: {{length bio}}</p>
<p>Number of orders: {{length orders}}</p>

<h3>sort — sort a list by field</h3>
<h4>Orders sorted by date ascending:</h4>
<ul>
{{#each (sort orders "date" "asc" "date")}}
  <li>{{id}} — {{product}} — {{date}}</li>
{{/each}}
</ul>
<h4>Orders sorted by unitPrice descending:</h4>
<ul>
{{#each (sort orders "unitPrice" "desc" "number")}}
  <li>{{product}} — \${{unitPrice}}</li>
{{/each}}
</ul>

<h3>repeat — render a block N times</h3>
<p>Star rating ({{repeatStars}} stars):
{{#repeat repeatStars}}★{{/repeat}}</p>
<p>Numbered list via repeat:</p>
<ol>
{{#repeat 4}}
  <li>Item {{add @index 1}}{{#if @first}} (first){{/if}}{{#if @last}} (last){{/if}}</li>
{{/repeat}}
</ol>

<h3>set — scoped local variables</h3>
{{#set greeting=(concat "Hello, " firstName "!") tier="VIP"}}
  <p>{{greeting}}</p>
  <p>Your tier: {{tier}}</p>
{{/set}}

<h3>with — scope into a nested object</h3>
{{#with address}}
  <p>{{street}}, {{city}}, {{state}} {{zip}}, {{country}}</p>
  <p>City: {{city}} | Back to root: {{@root.firstName}} {{@root.lastName}}</p>
{{/with}}

{{#with preferences}}
  <p>Theme: {{theme}} | Notifications: {{iif notifications "On" "Off"}} | Language: {{uppercase language}}</p>
{{/with}}`,
    dataFile: 'training-utility',
  },

  {
    name: '🎓 Training: Math',
    template: `<h2>Math Functions</h2>

<h3>add — sum (rounded to 2 dp)</h3>
<p>unitPrice + shippingCost = \${{add unitPrice shippingCost}}</p>
<p>walletBalance + loyaltyPoints = {{add walletBalance loyaltyPoints}}</p>
<p>Chained: price + shipping + tax = \${{add (add unitPrice shippingCost) (multiply unitPrice taxRate)}}</p>

<h3>subtract — difference (rounded to 2 dp)</h3>
<p>walletBalance - unitPrice = \${{subtract walletBalance unitPrice}}</p>
<p>totalSpend - refundAmount = \${{subtract totalSpend refundAmount}}</p>
<p>maxScore - score = {{subtract maxScore score}} points from perfect</p>

<h3>multiply — product (rounded to 2 dp)</h3>
<p>unitPrice × qty = \${{multiply unitPrice qty}}</p>
<p>Apply {{multiply discountRate 100}}% discount: \${{multiply unitPrice (subtract 1 discountRate)}}</p>
<p>Tax amount: \${{multiply unitPrice taxRate}}</p>
<p>Points earned: {{multiply totalSpend pointsPerDollar}}</p>

<h3>divide — quotient (rounded to 2 dp)</h3>
<p>totalSpend / qty = \${{divide totalSpend qty}} avg per item</p>
<p>loyaltyPoints / pointsPerDollar = \${{divide loyaltyPoints pointsPerDollar}} value</p>
<p>score / maxScore = {{divide score maxScore}} ratio</p>
<p>daysInYear / weeksInYear = {{divide daysInYear weeksInYear}} days/week</p>

<h3>modulo — remainder (rounded to 2 dp)</h3>
<p>items mod pageSize = {{modulo items pageSize}} (remainder on last page)</p>
<p>loyaltyPoints mod 500 = {{modulo loyaltyPoints 500}} (points until next reward)</p>
{{#if (compare (modulo score 2) "==" 0)}}
  <p>Score {{score}} is even.</p>
{{else}}
  <p>Score {{score}} is odd.</p>
{{/if}}

<h3>Random — random integer in [first, second] inclusive</h3>
<p>Random roll (1–6): {{Random minRoll maxRoll}}</p>
<p>Random discount ({{minDiscount}}–{{maxDiscount}}%): {{Random minDiscount maxDiscount}}%</p>
<p>Random item index (0–{{subtract items 1}}): {{Random 0 (subtract items 1)}}</p>

<h3>Applied: full order summary</h3>
{{#set subtotal=(multiply unitPrice qty) discount=(multiply (multiply unitPrice qty) discountRate)}}
  <p>Qty: {{qty}} × \${{unitPrice}} = \${{subtotal}}</p>
  <p>Discount ({{multiply discountRate 100}}%): −\${{discount}}</p>
  <p>After discount: \${{subtract subtotal discount}}</p>
  <p>Shipping: \${{shippingCost}}</p>
  <p>Tax ({{multiply taxRate 100}}%): \${{multiply (subtract subtotal discount) taxRate}}</p>
  <p><strong>Total: \${{add (add (subtract subtotal discount) shippingCost) (multiply (subtract subtotal discount) taxRate)}}</strong></p>
{{/set}}`,
    dataFile: 'training-math',
  },
];
