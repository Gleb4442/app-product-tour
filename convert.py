import re

with open('index.html2', 'r') as f:
    content = f.read()

# Extract from <header class="sticky... to </main>
match = re.search(r'(<header class="sticky.*?</main>)', content, re.DOTALL)
if match:
    html = match.group(1)
    
    # Convert HTML to JSX
    html = html.replace('class="', 'className="')
    html = html.replace('stroke-width', 'strokeWidth')
    html = html.replace('stroke-linecap', 'strokeLinecap')
    html = html.replace('stroke-linejoin', 'strokeLinejoin')
    html = html.replace('<br>', '<br/>')
    html = html.replace('<!--', '{/*')
    html = html.replace('-->', '*/}')
    
    # Ensure void elements are closed
    html = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', html)
    html = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', html)
    html = re.sub(r'<br(.*?)(?<!/)>', r'<br\1/>', html)

    jsx = f"""import React from 'react';

export default function Services({{ active, step }}) {{
    return (
        <div className={{`absolute inset-0 bg-[#f6f6f8] text-slate-900 transition-opacity duration-700 ease-in-out ${{step === 2 ? 'opacity-100 z-40 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}}`}}>
            <div className="absolute inset-0 overflow-y-auto hide-scrollbar pb-24">
                {html}
            </div>
        </div>
    );
}}
"""
    with open('src/components/PhoneMockup/Screens/Services.jsx', 'w') as out:
        out.write(jsx)
    print("Successfully converted to Services.jsx")
else:
    print("Could not extract HTML content")
