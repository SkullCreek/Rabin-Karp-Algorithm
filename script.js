// Following program is a Javascript implementation 
// of Rabin Karp Algorithm given in the CLRS book 
let submit = document.getElementById("submit");
submit.onclick = () => {  

    String_text = String(document.getElementById("var1").value);
    String_pattern = String(document.getElementById("var2").value);
    d_value = Number(document.getElementById("var3").value);
    q_value = Number(document.getElementById("var4").value); 

    // d is the number of characters in
    // the input alphabet 
    let d = d_value; 
    // Driver code
    let txt = String_text;
    let pat = String_pattern;
        
    // A prime number
    let q = q_value; 
        
    /* pat -> pattern 
        txt -> text 
        q -> A prime number 
    */
    function search(pat, txt, q) 
    { 
        let M = pat.length; 
        let N = txt.length; 
        let i, j; 
            
        // Hash value for pattern 
        let p = 0; 
            
        // Hash value for txt 
        let t = 0; 
        let h = 1; 
        
        // The value of h would be "pow(d, M-1)%q" 
        for(i = 0; i < M - 1; i++) {
            h = (h * d) % q; 
        }
        // console.log(h);
            
        document.getElementById("text_1").innerHTML =  `T: ${String_text}`;
        document.getElementById("pat_1").innerHTML = `P: ${String_pattern}`;
        document.getElementById("d_val").innerHTML = `d: ${d_value}`;
        document.getElementById("q_val").innerHTML = `q: ${q_value}`;
        document.getElementById("n_val").innerHTML = `n =  ${N}`;    
        document.getElementById("m_val").innerHTML = `m =  ${M}`;
        document.getElementById("h_step1").innerHTML = `h = ${d_value}<sup style="color: black; font-size: 10px;">${M-1}</sup> mod ${q_value}`;
        document.getElementById("h_val").innerHTML = `h = ${h}`;
        document.getElementById("for_loop1").innerHTML = `for i = 1 to m ---> i = 1 to ${M}`;
            


        
        // Calculate the hash value of pattern and 
        // first window of text 
        for(i = 0; i < M; i++) 
        { 
            let loop1 = document.getElementById("h_value_pq");
            let p1 = document.createElement("P");
            p1.innerHTML = `i = ${i+1}`;
            let p2 = document.createElement("P");
            p2.innerHTML = `p <--- (d*p + p[i]) mod q`;
            let p3 = document.createElement("P");
            p3.innerHTML = `p <--- (${d}*${p} + ${(pat[i].charCodeAt()-64)}) mod ${q}`;
            let p4 = document.createElement("P");
            p4.innerHTML = `t <--- (d*t + t[i]) mod q`;
            let p5 = document.createElement("P");
            p5.innerHTML = `t<sub style="color: black;">${i}</sub> <--- (${d}*${t} + ${(txt[i].charCodeAt()-64)}) mod ${q}}`;
            loop1.appendChild(p1);
            loop1.appendChild(p2);
            loop1.appendChild(p3);
            loop1.appendChild(p4);
            loop1.appendChild(p5);
            p = (d * p + (pat[i].charCodeAt()-64)) % q; 
            t = (d * t + (txt[i].charCodeAt()-64)) % q;
            let p7 = document.createElement("P");
            p7.innerHTML = `<--- ${p}`;
            let p6 = document.createElement("P");
            p6.innerHTML = `<--- ${t}`;
            loop1.appendChild(p7);
            loop1.appendChild(p6);
            // console.log(p);
            // console.log(t); 
            
        } 
        let loop1 = document.getElementById("h_value_pq");
        let p6 = document.createElement("H1");
        p6.innerHTML = `for s <--- 0 to n-m => 0 to ${N-M}`;
        loop1.appendChild(p6);
        // Slide the pattern over text one by one 
        for(i = 0; i <= N - M; i++) 
        { 
            let loop1 = document.getElementById("h_value_pq");
            let p_s = document.createElement("P");
            p_s.innerHTML = `s = ${i}`;
            loop1.appendChild(p_s);
            // Check the hash values of current
            // window of text and pattern. If the
            // hash values match then only 
            // check for characters on by one 
            if (p == t) 
            { 
                let p_1 = document.createElement("P");
                p_1.innerHTML = `${p} == ${t}`;
                loop1.appendChild(p_1);    
                
                for(j = 0; j < M; j++) 
                { 
                    if (txt[i+j] != pat[j]) {
                        let p_2 = document.createElement("P");
                        p_2.innerHTML = `text is not equal to pattern <br> Spurious hit`;
                        loop1.appendChild(p_2); 
                        break; 
                    }
                } 
                
        
                // if p == t and pat[0...M-1] = 
                // txt[i, i+1, ...i+M-1] 
                if (j == M){ 
                        console.log("Pattern found at index " + i + "<br/>");
                        let p_3 = document.createElement("P");
                        p_3.innerHTML = `text is equal to pattern <br> Exact match`;
                        loop1.appendChild(p_3);
                } 
            }
            else{
                let p_1 = document.createElement("P");
                p_1.innerHTML = `${p} is not equal to ${t}`;
                loop1.appendChild(p_1);
            } 
            // Calculate hash value for next window 
            // of text: Remove leading digit, add 
            // trailing digit 
            
            if (i < N - M) 
            { 
                let a_4 = document.createElement("P");
                let a_5 = document.createElement("P");
                a_4.innerHTML = `S < n-m`;
                a_5.innerHTML = `${i} < ${N-M}`;
                loop1.appendChild(a_4);
                loop1.appendChild(a_5);
                let a_6 = document.createElement("P");
                let a_7 = document.createElement("P");
                let a_8 = document.createElement("P");
                let a_9 = document.createElement("P");
                let hr = document.createElement("HR");
                a_6.innerHTML = `t<sub>s+1</sub> <--- (d(t<sub>s</sub> - t[s+1]h) + t[s+m+1]) mod q`;
                a_7.innerHTML = `t<sub>${i+1}</sub> <--- (${d}(${t} - ${(txt[i].charCodeAt()-64)}*${h}) + ${(txt[i + M].charCodeAt()-64)}) mod ${q}`;
                a_8.innerHTML = `t<sub>${i+1}</sub> <--- ${(d * (t - (txt[i].charCodeAt()-64) * h) + (txt[i + M].charCodeAt()-64))} mod ${q}`;
                t = (d * (t - (txt[i].charCodeAt()-64) * h) + (txt[i + M].charCodeAt()-64)) % q; 
                a_9.innerHTML = `t<sub>${i+1}</sub> <--- ${t+q}`;
                loop1.appendChild(a_6);
                loop1.appendChild(a_7);
                loop1.appendChild(a_8);
                loop1.appendChild(a_9);
                loop1.appendChild(hr);
                // We might get negative value of t, 
                // converting it to positive 
                if (t < 0) 
                    t = (t + q); 
            } 
        } 
    } 
        

        
    // Function Call
    search(pat, txt, q);
    // This code is contributed by target_2
}
