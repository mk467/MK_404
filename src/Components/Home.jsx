import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store';
import {
  headContainerAnimation,
  headtContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

export const Home = () => {
  const snap = useSnapshot(state);
  return (
<AnimatePresence>
  {snap.intro&&(
    <motion.section className='home' {...slideAnimation('left')}></motion.section>
    
  )}
</AnimatePresence>
  )
}
/*and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professzezezezezezeazeazdazdor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.
and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.
and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.
and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.
and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.
and aggression. Given this, it’s perhaps no surprise that one of psychology’s
most well-known experiments was Stanley Milgram’s controversial exploration
of how far people were willing to submit to authority—the one where he tested
whether volunteers would be willing to give potentially fatal electrical shocks to
strangers when told to do so by someone in a white coat.
1
(A disturbing number
of them obeyed.) Obviously, this kind of research did a lot to illuminate the
complexities of the human mind, and has laid the foundations of modern
behavioral science. But the findings didn’t readily translate into uplifting
guidance for living a good life.
In recent years, however, the balance has shifted toward exploring the
conditions that invite positive behavior. Perhaps the most visible catalyst for the
shift came when Martin Seligman, a professor at the University of Pennsylvania,
was elected president of the American Psychological Association in 1998.
Seligman’s own research had previously focused on the study of helplessness.
But he announced with some fanfare that the theme for his term of office would
be “positive psychology,” the serious study of what it takes for us to be the best
version of ourselves. And since then, psychologists have directed more energy
toward understanding the jollier side of human experience—what helps us
thrive, lifts our spirits, and boosts our productivity. These are exactly the sort of
things that most of us are hungry to know more about, especially on those days
when our workplaces feel like a Milgram experiment.
ECONOMICS: MORE REALISM IN THEORIES OF
BEHAVIOR
At the same time, economics has also moved toward a more rounded view of the
human condition. At its heart, economics is the study of the way people make
choices: how we weigh the costs and benefits of different options, and what we
decide to do as a result. The choices might be mundane, like deciding which
snack to buy, or they might be consequential, like deciding which multimilliondollar project goes forward. Either way, to predict people’s choices, economists
used to build theoretical models that assumed humans always accurately and
independently assessed the benefits of each option open to them. But those
models weren’t able to explain a lot of real-life behavior: for example, the way
we often make snap decisions based on little information; the fact that we
sometimes change our minds, based on what others think; the way we
occasionally do nice things for other people without any expectation of payback.
This spurred two psychologists—Daniel Kahneman of Princeton and Amos
Tversky of Stanford—to cross enemy lines in 1979 and publish an article in
Econometrica, an influential economics journal. In the article, they highlighted
that people don’t behave like machines when it comes to the choices they make.
2
Emotional and social considerations drive many of our choices, often for good
reason and in quite predictable ways. And with that, they sparked a revolution.
Soon there was a new movement called “behavioral economics” that was
devoted to applying the powerful analytical tools of economics to the way that
real people make decisions in the real world. The result? Well, Kahneman went
on to win the Nobel Prize in Economics in 2002. But more important for us is
that economists now have a much more nuanced and accurate understanding of
the choices we make from day to day, and what it takes for us to nudge our
behavior one way or another.

*/
