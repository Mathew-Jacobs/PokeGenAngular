import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal'

@Component({
  selector: 'app-poke-gen',
  templateUrl: './poke-gen.component.html',
  styleUrls: ['./poke-gen.component.scss']
})
export class PokeGenComponent implements OnInit {

  types: Object[] = [
    {
      type: "Normal",
      color: "#A8A878"
    },
    {
      type: "Fire",
      color: "#F08030"
    },
    {
      type: "Fighting",
      color: "#C03028"
    },
    {
      type: "Water",
      color: "#6890F0"
    },
    {
      type: "Flying",
      color: "#A890F0"
    },
    {
      type: "Grass",
      color: "#78C850"
    },
    {
      type: "Poison",
      color: "#A040A0"
    },
    {
      type: "Electric",
      color: "#F8D030"
    },
    {
      type: "Ground",
      color: "#E0C068"
    },
    {
      type: "Psychic",
      color: "#F85888"
    },
    {
      type: "Rock",
      color: "#B8A038"
    },
    {
      type: "Ice",
      color: "#98D8D8"
    },
    {
      type: "Bug",
      color: "#A8B820"
    },
    {
      type: "Dragon",
      color: "#7038F8"
    },
    {
      type: "Ghost",
      color: "#705898"
    },
    {
      type: "Dark",
      color: "#705848"
    },
    {
      type: "Steel",
      color: "#B8B8D0"
    },
    {
      type: "Fairy",
      color: "#EE99AC"
    }
  ];
  animals: Animal[] = [
    {
        name: "Aardvark",
        desc: "The aardvark (/'??rdv??rk/ ARD-vark; Orycteropus afer) is a medium-sized, burrowing, nocturnal mammal native to Africa.&#91;2&#93;&#91;3&#93; It is the only living species of the order Tubulidentata,&#91;4&#93;&#91;5&#93; although other prehistoric species and genera of Tubulidentata are known. Unlike other insectivores, it has a long pig-like snout, which is used to sniff out food. It roams over most of the southern two-thirds of the African continent, avoiding areas that are mainly rocky. A nocturnal feeder, it subsists on ants and termites, which it will dig out of their hills using its sharp claws and powerful legs. It also digs to create burrows in which to live and rear its young. It receives a 'least concern' rating from the IUCN, although its numbers seem to be decreasing.",
        url: "https://en.wikipedia.org/wiki/Aardvark",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Porc_formiguer.JPG/220px-Porc_formiguer.JPG"
        },
        {
        name: "Albatross",
        desc: "Albatrosses, of the biological family Diomedeidae, are large seabirds related to the procellariids, storm petrels, and diving petrels in the order Procellariiformes (the tubenoses). They range widely in the Southern Ocean and the North Pacific. They are absent from the North Atlantic, although fossil remains show they once occurred there and occasional vagrants are found. Albatrosses are among the largest of flying birds, and species of the genus Diomedea (great albatrosses) have the longest wingspans of any extant birds, reaching up to 3.7&#160;m (12&#160;ft). The albatrosses are usually regarded as falling into four genera, but disagreement exists over the number of species.",
        url: "https://en.wikipedia.org/wiki/Albatross",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Short_tailed_Albatross1.jpg/250px-Short_tailed_Albatross1.jpg"
        },
        {
        name: "Alligator",
        desc: "An alligator is a crocodilian in the genus Alligator of the family Alligatoridae. The two living  species are the American alligator (A. mississippiensis) and the Chinese alligator (A. sinensis). Additionally, several extinct species of alligator are known from fossil remains. Alligators first appeared during the Oligocene epoch about 37 million years ago.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Alligator",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Chinese%2Bamerican_alligators.png/220px-Chinese%2Bamerican_alligators.png"
        },
        {
        name: "Alpaca",
        desc: "The alpaca (Vicugna pacos) is a species of South American camelid. It is similar to, and often confused with, the llama. However, alpacas are often noticeably smaller than llamas. The two animals are closely related and can successfully cross-breed. Alpacas and llamas are also closely related to the vicuña, which is believed to be the alpaca's wild ancestor, and to the guanaco. There are two breeds of alpaca: the Suri alpaca and the Huacaya alpaca.",
        url: "https://en.wikipedia.org/wiki/Alpaca",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/220px-Alpaca_%2831562329701%29.jpg"
        },
        {
        name: "Ant",
        desc: "Ants are eusocial insects of the family Formicidae and, along with the related wasps and bees, belong to the order Hymenoptera. Ants evolved from wasp-like ancestors in the Cretaceous period, about 140 million years ago, and diversified after the rise of flowering plants. More than 12,500 of an estimated total of 22,000 species have been classified.&#91;5&#93;&#91;6&#93; They are easily identified by their elbowed antennae and the distinctive node-like structure that forms their slender waists.",
        url: "https://en.wikipedia.org/wiki/Ant",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/94/Fire_ants_01.jpg/220px-Fire_ants_01.jpg"
        },
        {
        name: "Anteater",
        desc: "Anteater is a common name for the four extant mammal species of the suborder Vermilingua&#91;1&#93; (meaning 'worm tongue') commonly known for eating ants and termites.&#91;2&#93; The individual species have other names in English and other languages. Together with the sloths, they are within the order Pilosa. The name 'anteater' is also colloquially applied to the unrelated aardvark, numbat, echidnas, pangolins and some members of the Oecobiidae.",
        url: "https://en.wikipedia.org/wiki/Anteater",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Myresluger2.jpg/220px-Myresluger2.jpg"
        },
        {
        name: "Antelope",
        desc: "An antelope is a member of a number of even-toed ungulate species indigenous to various regions in Africa and Eurasia. Antelopes comprise a wastebasket taxon (miscellaneous group) within the family Bovidae, encompassing those Old World species that are not cattle, sheep, buffalo, bison, or goats; even so, antelope are generally more deer-like than other bovids. A group of antelope is called a herd.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Antelope",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blackbuck_male_female.jpg/220px-Blackbuck_male_female.jpg"
        },
        {
        name: "Ape",
        desc: "Apes (Hominoidea) are a branch of Old World tailless simians native to Africa and Southeast Asia. They are the sister group of the Old World monkeys, together forming the catarrhine clade. They are distinguished from other primates by a wider degree of freedom of motion at the shoulder joint as evolved by the influence of brachiation. In traditional and non-scientific use, the term 'ape' excludes humans, and is thus not equivalent to the scientific taxon Hominoidea. There are two extant branches of the superfamily Hominoidea: the gibbons, or lesser apes; and the hominids, or great apes.",
        url: "https://en.wikipedia.org/wiki/Ape",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/be/Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG/220px-Orang_Utan%2C_Semenggok_Forest_Reserve%2C_Sarawak%2C_Borneo%2C_Malaysia.JPG"
        },
        {
        name: "Armadillo",
        desc: "Armadillos (from Spanish 'little armoured one') are New World placental mammals in the order Cingulata. The Chlamyphoridae and Dasypodidae are the only surviving families in the order, which is part of the superorder Xenarthra, along with the anteaters and sloths. Nine extinct genera and 21 extant species of armadillo have been described, some of which are distinguished by the number of bands on their armour. All species are native to the Americas, where they inhabit a variety of different environments.",
        url: "https://en.wikipedia.org/wiki/Armadillo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/220px-Nine-banded_Armadillo.jpg"
        },
        {
        name: "Donkey",
        desc: "The donkey or ass (Equus africanus asinus)&#91;1&#93;&#91;2&#93; is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years. There are more than 40 million donkeys in the world, mostly in underdeveloped countries, where they are used principally as draught or pack animals. Working donkeys are often associated with those living at or below subsistence levels. Small numbers of donkeys are kept for breeding or as pets in developed countries.",
        url: "https://en.wikipedia.org/wiki/Donkey",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Donkey_1_arp_750px.jpg/220px-Donkey_1_arp_750px.jpg"
        },
        {
        name: "Baboon",
        desc: "Baboons are primates comprising the genus  Papio, one of the 23 genera of Old World monkeys. The common names of the five species of baboons are the hamadryas, the Guinea (also called the western and the red), the olive, the yellow, and the chacma baboons. They are each native to one of five specific areas of Africa, and the hamadryas baboon is also native to part of the Arabian Peninsula.&#91;2&#93; They are among the largest non-hominoid primates.  Baboons have existed for at least two million years.",
        url: "https://en.wikipedia.org/wiki/Baboon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Olive_baboon_Ngorongoro.jpg/220px-Olive_baboon_Ngorongoro.jpg"
        },
        {
        name: "Badger",
        desc: "Badgers are short-legged omnivores in the families Mustelidae (which also includes the otters, polecats, weasels, and ferrets), and Mephitidae (which also includes the skunks). They are not a natural taxonomic grouping, but are united by possession of a squat body adapted for fossorial activity. All belong to the caniform suborder of carnivoran mammals. The 11 species of mustelid badgers are grouped in four subfamilies: Melinae (4 species, including the European badger), Helictidinae (5 species of ferret-badger), Mellivorinae (the honey badger or ratel), and Taxideinae (the American badger); the respective genera are Arctonyx, Meles, Melogale, Mellivora and Taxidea. Badgers include the most basal mustelids; the American badger is the most basal of all, followed successively by the ratel and Melinae; the estimated split dates are about 17.8, 15.5 and 14.8 million years ago, respectively.&#91;1&#93; The two species of Asiatic stink badgers of the genus Mydaus were formerly included within Melinae (and thus Mustelidae), but more recent genetic evidence indicates these are actually members of the skunk family.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Badger",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Badger-badger.jpg/220px-Badger-badger.jpg"
        },
        {
        name: "Barracuda",
        desc: "A barracuda is a large, predatory ray-finned fish known for its fearsome appearance and ferocious behaviour. The barracuda is a saltwater fish of the genus Sphyraena, the only genus in the family Sphyraenidae which was named by Constantine Samuel Rafinesque in 1815.&#91;2&#93; It is found in tropical and subtropical oceans worldwide ranging from the eastern border of the Atlantic Ocean to the Red Sea, on its western border the Caribbean Sea, and in tropical areas of the Pacific Ocean. Barracudas reside near the top of the water and near coral reefs and sea grasses.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Barracuda",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/81/Great_Barracuda_off_the_Netherland_Antilles.jpg/220px-Great_Barracuda_off_the_Netherland_Antilles.jpg"
        },
        {
        name: "Bat",
        desc: "Bats are mammals of the order Chiroptera;&#91;a&#93; with their forelimbs adapted as wings, they are the only mammals naturally capable of true and sustained flight. Bats are more manoeuvrable than birds, flying with their very long spread-out digits covered with a thin membrane or patagium. The smallest bat, and arguably the smallest extant mammal, is Kitti's hog-nosed bat, which is 29-34&#160;mm (1.14-1.34&#160;in) in length, 15&#160;cm (5.91&#160;in) across the wings and 2-2.6&#160;g (0.07-0.09&#160;oz) in mass. The largest bats are the flying foxes and the giant golden-crowned flying fox, Acerodon jubatus, which can weigh 1.6&#160;kg (4&#160;lb) and have a wingspan of 1.7&#160;m (5&#160;ft 7&#160;in).",
        url: "https://en.wikipedia.org/wiki/Bat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wikipedia-Bats-001-v01.jpg/300px-Wikipedia-Bats-001-v01.jpg"
        },
        {
        name: "Bear",
        desc: "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America, Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears, shaggy hair, plantigrade paws with five nonretractile claws, and short tails.",
        url: "https://en.wikipedia.org/wiki/Bear",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/220px-2010-kodiak-bear-1.jpg"
        },
        {
        name: "Beaver",
        desc: "The beaver (genus Castor) is a large, primarily nocturnal, semiaquatic rodent. Castor includes two extant species, the North American beaver (Castor canadensis) (native to North America) and Eurasian beaver (Castor fiber) (Eurasia).&#91;1&#93; Beavers are known for building dams, canals, and lodges (homes). They are the second-largest rodent in the world (after the capybara). Their colonies create one or more dams to provide still, deep water to protect against predators, and to float food and building material. The North American beaver population was once more than 60 million, but as of 1988 was 6-12 million. This population decline is the result of extensive hunting for fur, for glands used as medicine and perfume, and because the beavers' harvesting of trees and flooding of waterways may interfere with other land uses.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Beaver",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/220px-American_Beaver.jpg"
        },
        {
        name: "Bee",
        desc: "Bees are flying insects closely related to wasps and ants, known for their role in pollination and, in the case of the best-known bee species, the western honey bee, for producing honey and beeswax. Bees are a monophyletic lineage within the superfamily Apoidea and are presently considered a clade, called Anthophila. There are over 16,000 known species of bees in seven recognized biological families.&#91;1&#93;&#91;2&#93;  They are found on every continent except Antarctica, in every habitat on the planet that contains insect-pollinated flowering plants.",
        url: "https://en.wikipedia.org/wiki/Bee",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tetragonula_carbonaria_%2814521993792%29.jpg/220px-Tetragonula_carbonaria_%2814521993792%29.jpg"
        },
        {
        name: "Binturong",
        desc: "The binturong (/b?n'tu?r??/ bin-TOO-rong) (Arctictis binturong), also known as bearcat, is a viverrid native to South and Southeast Asia. It is uncommon in much of its range, and has been assessed as Vulnerable on the IUCN Red List because of a declining population trend that is estimated at more than 30% over the last three decades.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Binturong",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Binturong_in_Overloon.jpg/220px-Binturong_in_Overloon.jpg"
        },
        {
        name: "Bird",
        desc: "Birds, also known as Aves or avian dinosaurs,  are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton. Birds live worldwide and range in size from the 5&#160;cm (2&#160;in) bee hummingbird to the 2.75&#160;m (9&#160;ft) ostrich. They rank as the world's most numerically-successful class of tetrapods, with approximately ten thousand living species, more than half of these being passerines, sometimes known as perching birds. Birds have wings which are more or less developed depending on the species; the only known groups without wings are the extinct moa and elephant birds. Wings, which evolved from forelimbs, gave birds the ability to fly, although further evolution has led to the loss of flight in flightless birds, including ratites, penguins, and diverse endemic island species of birds. The digestive and respiratory systems of birds are also uniquely adapted for flight. Some bird species of aquatic environments, particularly seabirds and some waterbirds, have further evolved for swimming.",
        url: "https://en.wikipedia.org/wiki/Bird",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bird_Diversity_2013.png/300px-Bird_Diversity_2013.png"
        },
        {
        name: "Bison",
        desc: "Bison are large, even-toed ungulates in the genus Bison within the subfamily Bovinae.",
        url: "https://en.wikipedia.org/wiki/Bison",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bison_bonasus_%28Linnaeus_1758%29.jpg/220px-Bison_bonasus_%28Linnaeus_1758%29.jpg"
        },
        {
        name: "Bluebird",
        desc: "The bluebirds are a group of medium-sized, mostly insectivorous or omnivorous birds in the order of Passerines in the genus Sialia of the thrush family (Turdidae). Bluebirds are one of the few thrush genera in the Americas. They have blue, or blue and rose beige, plumage. Female birds are less brightly colored than males, although color patterns are similar and there is no noticeable difference in size between the two sexes.",
        url: "https://en.wikipedia.org/wiki/Bluebird",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Eastern_Bluebird.jpg/220px-Eastern_Bluebird.jpg"
        },
        {
        name: "Boar",
        desc: "The wild boar (Sus scrofa), also known as the wild swine,&#91;3&#93; Eurasian wild pig,&#91;4&#93; or simply wild pig,&#91;5&#93; is a suid native to much of Eurasia, North Africa, and the Greater Sunda Islands. Human intervention has spread its distribution further, making the species one of the widest-ranging mammals in the world, as well as the most widely spread suiform.&#91;4&#93; Its wide range, high numbers, and adaptability mean that it is classed as least concern by the IUCN&#91;1&#93; and it has become an invasive species in part of its introduced range. The animal probably originated in Southeast Asia during the Early Pleistocene,&#91;6&#93; and outcompeted other suid species as it spread throughout the Old World.&#91;7&#93;",
        url: "https://en.wikipedia.org/wiki/Boar",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/20160208054949%21Wildschein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg/220px-20160208054949%21Wildschein%2C_N%C3%A4he_Pulverstampftor_%28cropped%29.jpg"
        },
        {
        name: "Bobcat",
        desc: "The bobcat (Lynx rufus) is a medium-sized North American cat&#91;2&#93; that appeared during the Irvingtonian stage of around 1.8 million years ago (AEO).&#91;3&#93; Containing 2 recognized subspecies, it ranges from southern Canada to central Mexico, including most of the contiguous United States. The bobcat is an adaptable predator that inhabits wooded areas, as well as semidesert, urban edge, forest edge, and swampland environments. It remains in some of its original range, but populations are vulnerable to local extinction ('extirpation') by coyotes and domestic animals. With a gray to brown coat, whiskered face, and black-tufted ears, the bobcat resembles the other species of the midsized genus Lynx. It is smaller on average than the Canada lynx, with which it shares parts of its range, but is several times larger than the domestic cat. It has distinctive black bars on its forelegs and a black-tipped, stubby (or 'bobbed') tail, from which it derives its name.",
        url: "https://en.wikipedia.org/wiki/Bobcat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bobcat2.jpg/220px-Bobcat2.jpg"
        },
        {
        name: "Buffalo",
        desc: "The African buffalo or Cape buffalo (Syncerus caffer) is a large Sub-Saharan African bovine.&#91;2&#93; Syncerus caffer caffer, the Cape buffalo, is the typical subspecies, and the largest one, found in Southern and East Africa. S. c. nanus (African forest buffalo) is the smallest subspecies, common in forest areas of Central and West Africa, while  S. c. brachyceros is in West Africa and S. c. aequinoctialis is in the savannas of East Africa. The adult buffalo's horns are its characteristic feature: they have fused bases, forming a continuous bone shield across the top of the head referred to as a 'boss'.  They are widely regarded as among the most dangerous animals on the African continent, and according to some estimates they gore, trample, and kill over 200 people every year.",
        url: "https://en.wikipedia.org/wiki/African_buffalo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Syncerus_caffer_nanus_001.JPG/220px-Syncerus_caffer_nanus_001.JPG"
        },
        {
        name: "Butterfly",
        desc: "Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily 'Hesperioidea'), and the most recent analyses suggest it also contains the moth-butterflies (formerly the superfamily 'Hedyloidea'). Butterfly fossils date to the Paleocene, which was about 56 million years ago.",
        url: "https://en.wikipedia.org/wiki/Butterfly",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Fesoj_-_Papilio_machaon_%28by%29.jpg/220px-Fesoj_-_Papilio_machaon_%28by%29.jpg"
        },
        {
        name: "Camel",
        desc: "A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as 'humps' on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat) and textiles (fiber and felt from hair). As working animals, camels&#8212;which are uniquely suited to their desert habitats&#8212;are a vital means of transport for passengers and cargo. There are three surviving species of camel. The one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel makes up the remainder. The Wild Bactrian camel is a separate species and is now critically endangered.",
        url: "https://en.wikipedia.org/wiki/Camel",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bactrian_Camel.jpg/220px-Bactrian_Camel.jpg"
        },
        {
        name: "Capybara",
        desc: "The capybara (Hydrochoerus hydrochaeris) is a mammal native to South America. It is the largest living rodent in the world. Also called chigüire, chigüiro (in Colombia and Venezuela) and carpincho, it is a member of the genus Hydrochoerus, of which the only other extant member is the lesser capybara (Hydrochoerus isthmius).  Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the coypu. The capybara inhabits savannas and dense forests and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually lives in groups of 10-20 individuals. The capybara is not a threatened species but it is hunted for its meat and hide and also for grease from its thick fatty skin, which is used in the pharmaceutical trade.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Capybara",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/220px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
        },
        {
        name: "Caracal",
        desc: "The caracal /'kær?kæl/ (Caracal caracal) is a medium-sized wild cat native to Africa, the Middle East, Central Asia, and India. It is characterised by a robust build, long legs, a short face, long tufted ears, and long canine teeth. Its coat is uniformly reddish tan or sandy, while the ventral parts are lighter with small reddish markings. It reaches 40-50&#160;cm (16-20&#160;in) at the shoulder and weighs 8-18&#160;kg (18-40&#160;lb). It was first scientifically described by German naturalist Johann Christian Daniel von Schreber in 1776. Three subspecies are recognised since 2017.",
        url: "https://en.wikipedia.org/wiki/Caracal",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Caracl_%2801%29%2C_Paris%2C_d%C3%A9cembre_2013.jpg/220px-Caracl_%2801%29%2C_Paris%2C_d%C3%A9cembre_2013.jpg"
        },
        {
        name: "Caribou",
        desc: "The reindeer (Rangifer tarandus), also known as the caribou in North America,&#91;3&#93; is a species of deer with circumpolar distribution, native to Arctic, sub-Arctic, tundra, boreal, and mountainous regions of northern Europe, Siberia, and North America.&#91;2&#93; This includes both sedentary and migratory populations. Rangifer herd size varies greatly in different geographic regions. The Taimyr herd of migrating Siberian tundra reindeer (R. t. sibiricus) in Russia is the largest wild reindeer herd in the world,&#91;4&#93;&#91;5&#93; varying between 400,000 and 1,000,000. What was once the second largest herd is the migratory boreal woodland caribou (R. t. caribou) George River herd in Canada, with former variations between 28,000 and 385,000. As of January 2018, there are fewer than 9,000 animals estimated to be left in the George River herd, as reported by the Canadian Broadcasting Corporation.&#91;6&#93; The New York Times reported in April 2018 of the disappearance of the only herd of southern mountain caribou in the lower 48 states, with an expert calling it 'functionally extinct' after the herd's size dwindled to a mere three animals.&#91;7&#93;",
        url: "https://en.wikipedia.org/wiki/Caribou",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg/220px-Reinbukken_p%C3%A5_frisk_gr%C3%B8nt_beite._-_panoramio.jpg"
        },
        {
        name: "Cassowary",
        desc: "Cassowaries (/'kæs?w??ri/), genus Casuarius, are ratites (flightless birds without a keel on their sternum bone) that are native to the tropical forests of New Guinea (Papua New Guinea and Indonesia), East Nusa Tenggara, the Maluku Islands, and northeastern Australia.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Cassowary",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/54/Southern_Cassowary_7071.jpg/220px-Southern_Cassowary_7071.jpg"
        },
        {
        name: "Cat",
        desc: "The cat (Felis catus) is a small carnivorous mammal.&#91;1&#93;&#91;2&#93; It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family.&#91;4&#93; The cat is either a house cat or a farm cat, which are pets, or a feral cat, which ranges freely and avoids human contact.&#91;5&#93; A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.&#91;6&#93;",
        url: "https://en.wikipedia.org/wiki/Cat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/260px-Cat_poster_1.jpg"
        },
        {
        name: "Caterpillar",
        desc: "Caterpillars /'kæt?r?p?l?r/  are the larval stage of members of the order Lepidoptera (the insect order comprising butterflies and moths).",
        url: "https://en.wikipedia.org/wiki/Caterpillar",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chenille_de_Grand_porte_queue_%28macaon%29.jpg/220px-Chenille_de_Grand_porte_queue_%28macaon%29.jpg"
        },
        {
        name: "Cattle",
        desc: "Cattle-colloquially cows-are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos taurus.",
        url: "https://en.wikipedia.org/wiki/Cattle",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CH_cow_2_cropped.jpg/240px-CH_cow_2_cropped.jpg"
        },
        {
        name: "Chameleon",
        desc: "Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade of Old World lizards with 202 species described as of June 2015.&#91;1&#93; These species come in a range of colors, and many species have the ability to change color.",
        url: "https://en.wikipedia.org/wiki/Chameleon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Indian_Chameleon_%28Chamaeleo_zeylanicus%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Indian_Chameleon_%28Chamaeleo_zeylanicus%29_Photograph_By_Shantanu_Kuveskar.jpg"
        },
        {
        name: "Chamois",
        desc: "The chamois (Rupicapra rupicapra) is a species of goat-antelope native to mountains in Europe, including the European Alps, the Pyrenees, the Carpathians, the Tatra Mountains, the Balkans, the Rila - Rhodope massif, parts of Turkey, the Caucasus, and the Apennines.&#91;2&#93; The chamois has also been introduced to the South Island of New Zealand. Some subspecies of chamois are strictly protected in the EU under the European Habitats Directive.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Chamois",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/G%C3%A4mse_%28Rupicapra_rupicapra%29_Zoo_Salzburg_2014_g-crop.jpg/220px-G%C3%A4mse_%28Rupicapra_rupicapra%29_Zoo_Salzburg_2014_g-crop.jpg"
        },
        {
        name: "Cheetah",
        desc: "The cheetah (Acinonyx jubatus; /'t?i?t?/) is a large cat of the subfamily Felinae that occurs in North, Southern and East Africa, and a few localities in Iran. It inhabits a variety of mostly arid habitats like dry forests, scrub forests, and savannahs. The species is IUCN Red Listed as Vulnerable, as it suffered a substantial decline in its historic range in the 20th century due to habitat loss, poaching for the illegal pet trade, and conflict with humans. By 2016, the global cheetah population has been estimated at approximately 7,100 individuals in the wild. Several African countries have taken steps to improve cheetah conservation measures.",
        url: "https://en.wikipedia.org/wiki/Cheetah",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/220px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg"
        },
        {
        name: "Chicken",
        desc: "The chicken (Gallus gallus domesticus) is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl.&#91;1&#93; Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th-2nd centuries BC).&#91;2&#93;&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Chicken",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Female_pair.jpg/220px-Female_pair.jpg"
        },
        {
        name: "Chimpanzee",
        desc: "The chimpanzee (Pan troglodytes), also known as the common chimpanzee, robust chimpanzee, or simply 'chimp', is a species of great ape native to the forests and savannahs of tropical Africa. It has four confirmed subspecies and a fifth proposed subspecies. The chimpanzee and the closely related bonobo (sometimes called the 'pygmy chimpanzee') are classified in the genus Pan. Evidence from fossils and DNA sequencing shows that Pan is a sister taxon to the human lineage and are humans' closest living relatives.",
        url: "https://en.wikipedia.org/wiki/Common_chimpanzee",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eastern_Chimpanzee_%28Pan_troglodytes_schweinfurthii%29_%287068198095%29_%28cropped%29.jpg/220px-Eastern_Chimpanzee_%28Pan_troglodytes_schweinfurthii%29_%287068198095%29_%28cropped%29.jpg"
        },
        {
        name: "Chinchilla",
        desc: "Chinchillas are either of two species (Chinchilla chinchilla and Chinchilla lanigera) of crepuscular rodents of the parvorder Caviomorpha. They are slightly larger and more robust than ground squirrels, and are native to the Andes mountains in South America.&#91;3&#93; They live in colonies called 'herds' at high elevations of up to 4,270&#160;m (14,000&#160;ft). Historically, chinchillas lived in an area that included parts of Bolivia, Peru, Argentina, and Chile, but today, colonies in the wild are known only in Chile.&#91;4&#93; Along with their relatives, viscachas, they make up the family Chinchillidae. They are also related to the chinchilla rat.",
        url: "https://en.wikipedia.org/wiki/Chinchilla",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG/220px-Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG"
        },
        {
        name: "Chough",
        desc: "There are two species of passerine birds commonly called chough (/t??f/ CHUF) that constitute the genus Pyrrhocorax of the Corvidae (crow) family of birds. These are the red-billed chough (Pyrrhocorax pyrrhocorax), and the Alpine chough (or yellow-billed chough) (Pyrrhocorax graculus). The white-winged chough of Australia, despite its name, is not a true chough but rather a member of the family Corcoracidae and only distantly related.",
        url: "https://en.wikipedia.org/wiki/Chough",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chough_%28Pyrrhocorax_pyrrhocorax%29_%288%29.jpg/200px-Chough_%28Pyrrhocorax_pyrrhocorax%29_%288%29.jpg"
        },
        {
        name: "Coati",
        desc: "Coatis, also known as coatimundis (/ko????t?'m?ndi/),&#91;1&#93;&#91;2&#93; are members of the family (Procyonidae) in the genera Nasua and Nasuella. They are diurnal mammals native to South America, Central America, and the southwestern United States. The name coatimundi is purportedly derived from the Tupian languages of Brazil.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Coati",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/28/Leefgebied_neusbeer.JPG/220px-Leefgebied_neusbeer.JPG"
        },
        {
        name: "Cobra",
        desc: "Cobra is the common name of various elapid snakes, most of which belonging to the genus Naja.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Cobra",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Indiancobra.jpg/220px-Indiancobra.jpg"
        },
        {
        name: "Cockroach",
        desc: "Cockroaches are insects of the order Blattodea, which also includes termites. About 30 cockroach species out of 4,600 are associated with human habitats. About four species are well known as pests.",
        url: "https://en.wikipedia.org/wiki/Cockroach",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Snodgrass_common_household_roaches.png/250px-Snodgrass_common_household_roaches.png"
        },
        {
        name: "Cod",
        desc: "Cod is the common name for the demersal fish genus Gadus, belonging to the family Gadidae.&#91;1&#93; Cod is also used as part of the common name for a number of other fish species, and some species suggested to belong to genus Gadus are not called cod (the Alaska pollock).",
        url: "https://en.wikipedia.org/wiki/Cod",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG/330px-Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG"
        },
        {
        name: "Cormorant",
        desc: "Phalacrocoracidae is a family of approximately 40 species of aquatic birds commonly known as cormorants and shags. Several different classifications of the family have been proposed recently, and the number of genera is disputed. The great cormorant (P. carbo) and the common shag (P. aristotelis) are the only two species of the family commonly encountered on the British Isles,&#91;1&#93; and 'cormorant' and 'shag' appellations have been later assigned to different species in the family somewhat haphazardly.",
        url: "https://en.wikipedia.org/wiki/Cormorant",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/75/Microcarbo_melanoleucos_Austins_Ferry_3.jpg/240px-Microcarbo_melanoleucos_Austins_Ferry_3.jpg"
        },
        {
        name: "Cougar",
        desc: "The cougar (Puma concolor), also commonly known by other names including catamount,&#91;4&#93; mountain lion, panther, and puma,&#91;5&#93; is a large felid of the subfamily Felinae native to the Americas. Its range, from the Canadian Yukon to the southern Andes of South America, is the widest of any large wild terrestrial mammal in the Western Hemisphere. An adaptable, generalist species, the cougar is found in most American habitat types. It is the biggest cat in North America,&#91;6&#93; and the second-heaviest cat in the New World after the jaguar. Secretive and largely solitary by nature, the cougar is properly considered both nocturnal and crepuscular, although daytime sightings do occur.&#91;7&#93;&#91;8&#93;&#91;9&#93;&#91;10&#93; The cougar is more closely related to smaller felines, including the domestic cat (subfamily Felinae), than to any species of subfamily Pantherinae,&#91;1&#93;&#91;11&#93;&#91;12&#93; of which only the jaguar is native to the Americas.",
        url: "https://en.wikipedia.org/wiki/Cougar",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/220px-Mountain_Lion_in_Glacier_National_Park.jpg"
        },
        {
        name: "Coyote",
        desc: "The coyote (from Nahuatl coyotl pronunciation&#160;(help·info)), prairie wolf or brush wolf, Canis latrans, is a canine native to North America. It is smaller than its close relative, the gray wolf, and slightly smaller than the closely related eastern wolf and red wolf. It fills much of the same ecological niche as the golden jackal does in Eurasia, though it is larger and more predatory, and is sometimes called the American jackal by zoologists.",
        url: "https://en.wikipedia.org/wiki/Coyote",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2009-Coyote-Yosemite.jpg/220px-2009-Coyote-Yosemite.jpg"
        },
        {
        name: "Crab",
        desc: "Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting 'tail' (abdomen) (Greek: ß?α???, romanized:&#160;brachys = short,&#91;2&#93; ???? / ?ura = tail&#91;3&#93;), usually entirely hidden under the thorax. They live in all the world's oceans, in fresh water, and on land, are generally covered with a thick exoskeleton and have a single pair of pincers. Many other animals with similar names - such as hermit crabs, king crabs, porcelain crabs, horseshoe crabs, and crab lice - are not true crabs.",
        url: "https://en.wikipedia.org/wiki/Crab",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Liocarcinus_vernalis.jpg/220px-Liocarcinus_vernalis.jpg"
        },
        {
        name: "Crane",
        desc: "Cranes are a family, the Gruidae, of large, long-legged, and long-necked birds in the group Gruiformes. The 15 species of cranes are placed in four genera. Unlike the similar-looking but unrelated herons, cranes fly with necks outstretched, not pulled back. Cranes live on all continents except Antarctica and South America.",
        url: "https://en.wikipedia.org/wiki/Crane_(bird)",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Double_Trouble_%284919788838%29.jpg/220px-Double_Trouble_%284919788838%29.jpg"
        },
        {
        name: "Cricket",
        desc: "Crickets (also known as 'true crickets'), of the family Gryllidae, are insects related to bush crickets, and, more distantly, to grasshoppers. The Gryllidae have mainly cylindrical bodies, round heads, and long antennae. Behind the head is a smooth, robust pronotum. The abdomen ends in a pair of long cerci (spikes); females have a long, cylindrical ovipositor. The hind legs have enlarged femora (thighs), providing power for jumping. The front wings are adapted as tough, leathery elytra (wing covers), and some crickets chirp by rubbing parts of these together. The hind wings are membranous and folded when not in use for flight; many species, however, are flightless. The largest members of the family are the bull crickets, Brachytrupes, which are up to 5&#160;cm (2&#160;in) long.",
        url: "https://en.wikipedia.org/wiki/Cricket_(insect)",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Gryllus_campestris_MHNT.jpg/220px-Gryllus_campestris_MHNT.jpg"
        },
        {
        name: "Crocodile",
        desc: "Crocodiles (subfamily Crocodylinae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. Crocodylinae, all of whose members are considered true crocodiles, is classified as a biological subfamily. A broader sense of the term crocodile, Crocodylidae that includes Tomistoma, is not used in this article. The term crocodile here applies to only the species within the subfamily of Crocodylinae. The term is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae), and all other living and fossil Crocodylomorpha.",
        url: "https://en.wikipedia.org/wiki/Crocodile",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Pangil_Crocodile_Park_Davao_City.jpg/220px-Pangil_Crocodile_Park_Davao_City.jpg"
        },
        {
        name: "Crow",
        desc: "A crow is a bird of the genus Corvus, or more broadly a synonym for all of Corvus. The term 'crow' is used as part of the common name of many species. Species with the word 'crow' in their common name include:",
        url: "https://en.wikipedia.org/wiki/Crow",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/DAB_list_gray.svg/30px-DAB_list_gray.svg.png"
        },
        {
        name: "Cuckoo",
        desc: "The cuckoos are a family of birds, Cuculidae, the sole taxon in the order Cuculiformes.&#91;1&#93;&#91;2&#93;&#91;3&#93; The cuckoo family includes the common or European cuckoo, roadrunners, koels, malkohas, couas, coucals and anis. The coucals and anis are sometimes separated as distinct families, the Centropodidae and Crotophagidae respectively. The cuckoo order Cuculiformes is one of three that make up the Otidimorphae, the other two being the turacos and the bustards.",
        url: "https://en.wikipedia.org/wiki/Cuckoo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cacomantis_flabelliformis.jpg/220px-Cacomantis_flabelliformis.jpg"
        },
        {
        name: "Curlew",
        desc: "The curlews (/'k??rlju?/), genus Numenius, are a group of eight species of birds, characterised by long, slender, downcurved bills and mottled brown plumage. The English name is imitative of the  Eurasian curlew's call, but may have been influenced by the Old French corliu, 'messenger', from courir , 'to run'.  It was first recorded in 1377 in  Langland's Piers Plowman 'Fissch to lyue in _e flode.._e corlue by kynde of _e eyre'.&#91;1&#93;  In Europe 'curlew' usually refers to one species, the Eurasian curlew Numenius arquata.",
        url: "https://en.wikipedia.org/wiki/Curlew",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Curlew_-_natures_pics.jpg/220px-Curlew_-_natures_pics.jpg"
        },
        {
        name: "Deer",
        desc: "Deer (singular and plural) are the hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the fallow deer, and the chital; and the Capreolinae, including the reindeer (caribou), the roe deer, and the moose. Female reindeer, and male deer of all species except the Chinese water deer, grow and shed new antlers each year. In this they differ from permanently horned antelope, which are part of a different family (Bovidae) within the same order of even-toed ungulates (Artiodactyla).",
        url: "https://en.wikipedia.org/wiki/Deer",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Family_Cervidae_five_species.jpg/260px-Family_Cervidae_five_species.jpg"
        },
        {
        name: "Degu",
        desc: "The common degu (Octodon degus; /'de?gu?/), or, historically, the degu, is a small hystricomorpha rodent endemic to the Chilean matorral ecoregion of central Chile.&#91;2&#93; The name degu on its own indicates either the entire genus Octodon or, more commonly, just the common degu. Common degus belong to the parvorder Caviomorpha of the infraorder Hystricognathi, along with the chinchilla and guinea pig. The word degu comes from the indigenous language of Chile, Mapudungun, and the word dewü, meaning 'mouse' or 'rat'.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Common_degu",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Octodon_degus_-Heidelberg_Zoo%2C_Germany-8a.jpg/220px-Octodon_degus_-Heidelberg_Zoo%2C_Germany-8a.jpg"
        },
        {
        name: "Dhole",
        desc: "The dhole /do?l/ (Cuon alpinus) is a canid native to Central, South, and Southeast Asia. Other English names for the species include Asian wild dog, Asiatic wild dog,&#91;3&#93; Indian wild dog,&#91;4&#93; whistling dog, red dog,&#91;5&#93; and mountain wolf.&#91;6&#93; It is genetically close to species within the genus Canis,&#91;7&#93;(Fig. 10) but distinct in several anatomical aspects: its skull is convex rather than concave in profile, it lacks a third lower molar&#91;8&#93; and the upper molars sport only a single cusp as opposed to between two and four.&#91;9&#93; During the Pleistocene, the dhole ranged throughout Asia, Europe, and North America but became restricted to its historical range 12,000-18,000&#160;years ago.&#91;10&#93;",
        url: "https://en.wikipedia.org/wiki/Dhole",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/13/Indian_wild_dog_by_N._A._Naseer.jpg/200px-Indian_wild_dog_by_N._A._Naseer.jpg"
        },
        {
        name: "Dingo",
        desc: "The dingo is a dog that is native to Australia.&#91;7&#93;&#91;8&#93; The species name is debated: it is variously called Canis familiaris,&#91;2&#93;&#91;8&#93;&#91;9&#93; Canis familiaris dingo,&#91;6&#93;&#91;10&#93;  Canis lupus dingo,&#91;11&#93;&#91;12&#93; or Canis dingo.&#91;5&#93;&#91;7&#93; It is either a purebred, if breeding only in the wild, or a hybrid of a dingo and a domesticated dog. It is a medium-sized canid that possesses a lean, hardy body adapted for speed, agility, and stamina. The dingo's three main coat colours are: light ginger or tan, black and tan, or creamy white.&#91;7&#93;&#91;13&#93; The skull, the widest part of the dingo, is wedge-shaped and large in proportion to the body.&#91;7&#93; It differs from that of the domestic dog by its larger palatal width, longer rostrum, shorter skull height, and wider sagittal crest.&#91;14&#93;",
        url: "https://en.wikipedia.org/wiki/Dingo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/98/Dingo_walking.jpg/220px-Dingo_walking.jpg"
        },
        {
        name: "Dinosaur",
        desc: "Dinosaurs are a diverse group of reptiles&#91;note 1&#93; of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic-Jurassic extinction event 201 million years ago; their dominance continued through the Jurassic and Cretaceous periods. The fossil record demonstrates that birds are modern feathered dinosaurs, having evolved from earlier theropods during the late Jurassic Period. As such, birds were the only dinosaur lineage to survive the Cretaceous-Paleogene extinction event 66 million years ago. Dinosaurs can therefore be divided into avian dinosaurs, or birds; and non-avian dinosaurs, which are all dinosaurs other than birds. This article deals primarily with non-avian dinosaurs.",
        url: "https://en.wikipedia.org/wiki/Dinosaur",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dinosauria_montage_2.jpg/290px-Dinosauria_montage_2.jpg"
        },
        {
        name: "Dog",
        desc: "The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species)&#91;5&#93; is a member of the genus Canis (canines), which forms part of the wolf-like canids,&#91;6&#93; and is the most widely abundant terrestrial carnivore.&#91;7&#93;&#91;8&#93;&#91;9&#93;&#91;10&#93;&#91;11&#93; The dog and the extant gray wolf are sister taxa&#91;12&#93;&#91;13&#93;&#91;14&#93; as modern wolves are not closely related to the wolves that were first domesticated,&#91;13&#93;&#91;14&#93; which implies that the direct ancestor of the dog is extinct.&#91;15&#93; The dog was the first species to be domesticated&#91;14&#93;&#91;16&#93; and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.&#91;17&#93;",
        url: "https://en.wikipedia.org/wiki/Dog",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Collage_of_Nine_Dogs.jpg/260px-Collage_of_Nine_Dogs.jpg"
        },
        {
        name: "Dogfish",
        desc: "Squalidae, also called dogfish sharks, dog sharks, or spiny dogfish,&#91;2&#93; are a family of sharks in the order Squaliformes. Dogfish sharks make up the second largest order of sharks at 119 species. They have two dorsal fins, each with smooth spines, but no anal fin, and their skin is generally rough to the touch.&#91;1&#93; Dogfish tend to have slender bodies with a pointed snout. This species is also known to be more compact in comparison to other sharks. As the species reaches adulthood, males usually measure in at a maximum of 39 inches (990&#160;mm), while females typically measure 49 inches (1,200&#160;mm) long. This classifies the species as having a female-dominant sexual dimorphism. Dogfish sharks earned their name after a group of fishermen observed the species chasing down smaller fish in dog-like packs.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Squalidae",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/23/Squalus_acanthias.jpg/220px-Squalus_acanthias.jpg"
        },
        {
        name: "Dolphin",
        desc: "Dolphin is a common name of aquatic mammals within the infraorder Cetacea. The term dolphin usually refers to the extant families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the New World river dolphins), and Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species named as dolphins.",
        url: "https://en.wikipedia.org/wiki/Dolphin",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/220px-Tursiops_truncatus_01.jpg"
        },
        {
        name: "Dotterel",
        desc: "The Eurasian dotterel (Charadrius morinellus), also known in Europe as just dotterel, is a small wader in the plover family of birds.",
        url: "https://en.wikipedia.org/wiki/Dotterel",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Charadrius_morinellus_male.jpg/220px-Charadrius_morinellus_male.jpg"
        },
        {
        name: "Dove",
        desc: "Pigeons and doves constitute the animal family Columbidae and the order Columbiformes, which includes about 42 genera and 310 species. They are stout-bodied birds with short necks, and short slender bills that in some species feature fleshy ceres. They primarily feed on seeds, fruits, and plants. Pigeons and doves are likely the most common birds in the world; the family occurs worldwide, but the greatest variety is in the Indomalaya and Australasia ecozones.",
        url: "https://en.wikipedia.org/wiki/Dove",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/220px-Treron_vernans_male_-_Kent_Ridge_Park.jpg"
        },
        {
        name: "Dragonfly",
        desc: "A dragonfly is an insect belonging to the order Odonata, infraorder Anisoptera (from Greek ???σ?? anisos, 'unequal' and πτε??? pteron, 'wing', because the hindwing is broader than the forewing). Adult dragonflies are characterized by large, multifaceted eyes, two pairs of strong, transparent wings, sometimes with coloured patches, and an elongated body. Dragonflies can be mistaken for the related group, damselflies (Zygoptera), which are similar in structure, though usually lighter in build; however, the wings of most dragonflies are held flat and away from the body, while damselflies hold the wings folded at rest, along or above the abdomen. Dragonflies are agile fliers, while damselflies have a weaker, fluttery flight. Many dragonflies have brilliant iridescent or metallic colours produced by structural coloration, making them conspicuous in flight. An adult dragonfly's compound eyes have nearly 24,000 ommatidia each.",
        url: "https://en.wikipedia.org/wiki/Dragonfly",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/220px-Sympetrum_flaveolum_-_side_%28aka%29.jpg"
        },
        {
        name: "Duck",
        desc: "Duck is the common name for a large number of species in the waterfowl family Anatidae which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae; they do not represent a monophyletic group (the group of all descendants of a single common ancestral species) but a form taxon, since swans and geese are not considered ducks. Ducks are mostly aquatic birds, mostly smaller than the swans and geese, and may be found in both fresh water and sea water.",
        url: "https://en.wikipedia.org/wiki/Duck",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/220px-Bucephala-albeola-010.jpg"
        },
        {
        name: "Dugong",
        desc: "The dugong (/'dju?g??/; Dugong dugon) is a medium-sized marine mammal. It is one of four living species of the order Sirenia, which also includes three species of manatees. It is the only living representative of the once-diverse family Dugongidae; its closest modern relative, Steller's sea cow (Hydrodamalis gigas), was hunted to extinction in the 18th century.  The dugong is the only strictly herbivorous marine mammal.",
        url: "https://en.wikipedia.org/wiki/Dugong",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dugong.JPG/220px-Dugong.JPG"
        },
        {
        name: "Dunlin",
        desc: "The dunlin (Calidris alpina) is a small wader, sometimes separated with the other 'stints' in Erolia. The English name is a dialect form of 'dunling', first recorded in 1531-2. It derives from dun, 'dull brown', with the suffix -ling, meaning a person or thing with the given quality.&#91;2&#93; The genus name is from Ancient Greek kalidris or skalidris, a term used by Aristotle for some grey-coloured waterside birds. The specific alpina  is from Latin and means 'of high mountains', in this case referring to the Alps.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Dunlin",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d7/CalidrisAlpinaIUCNver2018_2.png/220px-CalidrisAlpinaIUCNver2018_2.png"
        },
        {
        name: "Eagle",
        desc: "Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, not all of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.&#91;1&#93; Outside this area, just 14 species can be found-2 in North America, 9 in Central and South America, and 3 in Australia.",
        url: "https://en.wikipedia.org/wiki/Eagle",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/%C3%81guila_calva.jpg/220px-%C3%81guila_calva.jpg"
        },
        {
        name: "Echidna",
        desc: "Echidnas (/?'k?dn?/), sometimes known as spiny anteaters,&#91;1&#93; belong to the family Tachyglossidae in the monotreme order of egg-laying mammals. The four extant species of Echidnas and the platypus are the only living mammals that lay eggs and the only surviving members of the order Monotremata.&#91;2&#93; The diet of some species consists of ants and termites, but they are not closely related to the true anteaters of the Americas, which are xenarthrans, along with sloths and armadillos. Echidnas live in Australia and New Guinea.",
        url: "https://en.wikipedia.org/wiki/Echidna",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Short-beaked_echidna_in_ANBG.jpg/220px-Short-beaked_echidna_in_ANBG.jpg"
        },
        {
        name: "Eel",
        desc: "An eel is any ray-finned fish belonging to the order Anguilliformes (/æ??gw?l?'f??rmi?z/), which consists of four suborders, 20 families, 111 genera, and about 800 species. Eels undergo considerable development from the early larval stage to the eventual adult stage, and most are predators.",
        url: "https://en.wikipedia.org/wiki/Eel",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Anguilla_japonica_1856.jpg/240px-Anguilla_japonica_1856.jpg"
        },
        {
        name: "Eland",
        desc: "Taurotragus is a genus of large antelopes of the African savanna, commonly known as elands. It contains two species: the common eland T. oryx and the giant eland T. derbianus.",
        url: "https://en.wikipedia.org/wiki/Taurotragus",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taurotragus_oryx_%28captive%29.jpg/220px-Taurotragus_oryx_%28captive%29.jpg"
        },
        {
        name: "Elephant",
        desc: "Elephants (from the Greek ???φα? (elephas), genitive ???φα?τ?? (elephantos)&#91;1&#93;), the largest existing land animals, are mammals of the family Elephantidae. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. The family Elephantidae also contains several now-extinct groups, including the mammoths and straight-tusked elephants. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs. Distinctive features of all elephants include a long trunk, tusks, large ear flaps, massive legs, and tough but sensitive skin. The trunk, also called a proboscis, is  used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. The pillar-like legs carry their great weight.",
        url: "https://en.wikipedia.org/wiki/Elephant",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg"
        },
        {
        name: "Elephant seal",
        desc: "Elephant seals are large, oceangoing earless seals in the genus Mirounga. The two species, the northern elephant seal (M. angustirostris) and the southern elephant seal (M. leonina), were both hunted to the brink of extinction by the end of the 19th century, but their numbers have since recovered.",
        url: "https://en.wikipedia.org/wiki/Elephant_seal",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d8/See_elefanten_edit.jpg/220px-See_elefanten_edit.jpg"
        },
        {
        name: "Elk",
        desc: "The elk or wapiti (Cervus canadensis) is one of the largest species within the  deer family, Cervidae, and one of the largest terrestrial mammals in North America and Northeast Asia. This animal should not be confused with the still larger moose (Alces alces) to which the name 'elk' applies in British English and in reference to populations in Eurasia.",
        url: "https://en.wikipedia.org/wiki/Elk",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wapiti.png/220px-Wapiti.png"
        },
        {
        name: "Emu",
        desc: "The emu (Dromaius novaehollandiae) is the second-largest living bird by height, after its ratite relative, the ostrich. It is endemic to Australia where it is the largest native bird and the only extant member of the genus Dromaius. The emu's range covers most of mainland Australia, but the Tasmanian, Kangaroo Island and King Island subspecies became extinct after the European settlement of Australia in 1788. The bird is sufficiently common for it to be rated as a least-concern species by the International Union for Conservation of Nature.",
        url: "https://en.wikipedia.org/wiki/Emu",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emu-wild.jpg/240px-Emu-wild.jpg"
        },
        {
        name: "Falcon",
        desc: "Falcons (/'f?lk?n, 'f??l-, 'fæl-/) are birds of prey in the genus Falco, which includes about 40 species. Falcons are widely distributed on all continents of the world except Antarctica, though closely related raptors did occur there in the Eocene.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Falcon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/39/Brown-Falcon%2C-Vic%2C-3.1.2008.jpg/220px-Brown-Falcon%2C-Vic%2C-3.1.2008.jpg"
        },
        {
        name: "Ferret",
        desc: "The ferret (Mustela putorius furo) is the domesticated form of the European polecat, a mammal belonging to the same genus as the weasel, Mustela, in the family Mustelidae.&#91;1&#93; Their fur is typically brown, black, white, or mixed. They have an average length of 51&#160;cm (20&#160;in), including a 13&#160;cm (5.1&#160;in) tail, weigh about 1.5-4 pounds (0.7-2&#160;kg), and have a natural lifespan of 7 to 10&#160;years.&#91;2&#93; Ferrets are sexually dimorphic predators, with males being substantially larger than females.",
        url: "https://en.wikipedia.org/wiki/Ferret",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ferret_2008.png/220px-Ferret_2008.png"
        },
        {
        name: "Finch",
        desc: "The true finches are small to medium-sized passerine birds in the family Fringillidae. Finches have stout conical bills adapted for eating seeds and often have colourful plumage. They occupy a great range of habitats where they are usually resident and do not migrate. They have a worldwide distribution except for Australia and the polar regions. The family includes species known as siskins, canaries, redpolls, serins, grosbeaks and euphonias.",
        url: "https://en.wikipedia.org/wiki/Finch",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bullfinch_male.jpg/220px-Bullfinch_male.jpg"
        },
        {
        name: "Fish",
        desc: "Fish are gill-bearing aquatic craniate animals that lack limbs with digits. They form a sister group to the tunicates, together forming the olfactores. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups. Tetrapods emerged within lobe-finned fishes, so cladistically they are fish as well. However, traditionally fish are rendered paraphyletic by excluding the tetrapods (i.e., the amphibians, reptiles, birds and mammals which all descended from within the same ancestry). Because in this manner the term 'fish' is defined negatively as a paraphyletic group, it is not considered a formal taxonomic grouping in systematic biology, unless it is used in the cladistic sense, including tetrapods.&#91;1&#93;&#91;2&#93; The traditional term pisces (also ichthyes) is considered a typological, but not a phylogenetic classification.",
        url: "https://en.wikipedia.org/wiki/Fish",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Pterois_volitans_Manado-e_edit.jpg/220px-Pterois_volitans_Manado-e_edit.jpg"
        },
        {
        name: "Flamingo",
        desc: "Flamingos or flamingoes&#91;1&#93; /fl?'m??go?z/ are a type of wading bird in the family Phoenicopteridae, the only bird family in the order Phoenicopteriformes. Four flamingo species are distributed throughout the Americas, including the Caribbean, and two species are native to Africa, Asia, and Europe.",
        url: "https://en.wikipedia.org/wiki/Flamingo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flamingos_Laguna_Colorada.jpg/220px-Flamingos_Laguna_Colorada.jpg"
        },
        {
        name: "Fly",
        desc: "Flies are insects with a pair of functional wings for flight and a pair of specialized hindwings called halteres for balance. They are classified as an order called Diptera, that name being derived from the Greek δ?- di- 'two', and πτε??? pteron 'wings'.  The order Diptera is divided into two suborders (although one suborder is non-monophyletic), with about 110 families divided between them; the families contain an estimated 1,000,000 species, including the familiar housefly, horse-fly, crane fly, and hoverfly;&#91;a&#93; although only about 125,000 species have a species description published.&#91;3&#93;  The earliest fly fossils found so far are from the Triassic, about 240 million years ago; phylogenetic analysis suggests that flies originated in the Permian, about 260 million years ago.",
        url: "https://en.wikipedia.org/wiki/Fly",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bessenbandzweefvlieg_Vrouwtje_%282%29.JPG/220px-Bessenbandzweefvlieg_Vrouwtje_%282%29.JPG"
        },
        {
        name: "Fox",
        desc: "Foxes are small-to-medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).",
        url: "https://en.wikipedia.org/wiki/Fox",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/03/Vulpes_vulpes_laying_in_snow.jpg/220px-Vulpes_vulpes_laying_in_snow.jpg"
        },
        {
        name: "Frog",
        desc: "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil 'proto-frog' appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago. Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is in tropical rainforests. There are over 6,300 recorded species, accounting for around 88% of extant amphibian species. They are also one of the five most diverse vertebrate orders. Warty frog species tend to be called toads, but the distinction between frogs and toads is informal, not from taxonomy or evolutionary history.",
        url: "https://en.wikipedia.org/wiki/Frog",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Anoures.jpg/220px-Anoures.jpg"
        },
        {
        name: "Gaur",
        desc: "The gaur (/ga??r/, Bos gaurus), also called the Indian bison, is the largest extant bovine. It is native to South and Southeast Asia and has been listed as Vulnerable on the IUCN Red List since 1986. The global population has been estimated at maximum 21,000 mature individuals by 2016. It declined by more than 70% during the last three generations, and is extinct in Sri Lanka and probably also in Bangladesh. In well-protected areas, it is stable and rebuilding in a few areas.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Gaur",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indian_Gaur_from_anaimalai_hills_JEG5290.jpg/220px-Indian_Gaur_from_anaimalai_hills_JEG5290.jpg"
        },
        {
        name: "Gazelle",
        desc: "A gazelle is any of many antelope species in the genus Gazella.  This article also deals with the six species included in two further genera, Eudorcas and Nanger, which were formerly considered subgenera of Gazella. A third former subgenus, Procapra,  includes  three living species of Asian gazelles.",
        url: "https://en.wikipedia.org/wiki/Gazelle",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Slender-horned_gazelle_%28Cincinnati_Zoo%29.jpg/220px-Slender-horned_gazelle_%28Cincinnati_Zoo%29.jpg"
        },
        {
        name: "Gecko",
        desc: "Geckos are lizards belonging to the infraorder Gekkota, found in warm climates throughout the world. They range from 1.6 to 60&#160;cm (0.64 to 24 inches). Most geckos cannot blink, but they often lick their eyes to keep them clean and moist. They have a fixed lens within each iris that enlarges in darkness to let in more light.",
        url: "https://en.wikipedia.org/wiki/Gecko",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Phelsuma_l._laticauda.jpg/220px-Phelsuma_l._laticauda.jpg"
        },
        {
        name: "Gerbil",
        desc: "A gerbil is a small mammal of the subfamily Gerbillinae in the order Rodentia. Once known as desert rats, the gerbil subfamily includes about 110 species of African, Indian, and Asian rodents, including sand rats and jirds, all of which are adapted to arid habitats. Most are primarily active during the day, making them diurnal&#91;1&#93; (but some species, including the common household pet, exhibit crepuscular behavior), and almost all are omnivorous. Gerbils are related to mice and rats; they all belong to the family Muridae.",
        url: "https://en.wikipedia.org/wiki/Gerbil",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gerbil.JPG/220px-Gerbil.JPG"
        },
        {
        name: "Giant panda",
        desc: "The giant panda (Ailuropoda melanoleuca; Chinese&#58; ???; pinyin&#58; dà xióng mao),&#91;4&#93; also known as panda bear or simply panda, is a bear&#91;5&#93; native to south central China.&#91;1&#93; It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body. The name 'giant panda' is sometimes used to distinguish it from the red panda. Though it belongs to the order Carnivora, the giant panda is a folivore, with bamboo shoots and leaves making up more than 99% of its diet.&#91;6&#93; Giant pandas in the wild will occasionally eat other grasses, wild tubers, or even meat in the form of birds, rodents, or carrion. In captivity, they may receive honey, eggs, fish, yams, shrub leaves, oranges, or bananas along with specially prepared food.&#91;7&#93;&#91;8&#93;",
        url: "https://en.wikipedia.org/wiki/Giant_panda",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/220px-Grosser_Panda.JPG"
        },
        {
        name: "Giraffe",
        desc: "The giraffe (Giraffa) is an African even-toed ungulate mammal, the tallest living terrestrial animal and the largest ruminant.  It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However the existence of up to eight extant giraffe species have been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other species are extinct, prehistoric species known from fossils.",
        url: "https://en.wikipedia.org/wiki/Giraffe",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/220px-Giraffe_Mikumi_National_Park.jpg"
        },
        {
        name: "Gnat",
        desc: "A gnat /'næt/ is any of many species of tiny flying insects in the dipterid suborder Nematocera, especially those in the families Mycetophilidae, Anisopodidae and Sciaridae.&#91;1&#93; They can be both biting and non-biting. Most often they fly in large numbers, called clouds. 'Gnat' is a loose descriptive category rather than a phylogenetic or other technical term, so there is no scientific consensus on what constitutes a gnat.",
        url: "https://en.wikipedia.org/wiki/Gnat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Female_black_fungus_gnat.jpg/220px-Female_black_fungus_gnat.jpg"
        },
        {
        name: "Gnu",
        desc: "The wildebeest (/'w?ld?bi?st/ WIL-dih-beest,&#91;1&#93;&#91;2&#93;&#91;3&#93; /'v?l-/ VIL-,&#91;3&#93; plural wildebeest  or wildebeests), also called the gnu (/nju?/ NEW)&#91;4&#93;&#91;5&#93;&#91;6&#93;&#91;4&#93;&#91;6&#93;, is an antelope in the genus Connochaetes. It belongs to the family Bovidae, which includes antelopes, cattle, goats, sheep, and other even-toed horned ungulates. Connochaetes includes two species, both native to Africa: the black wildebeest or white-tailed gnu (C. gnou), and the blue wildebeest or brindled gnu (C. taurinus). Fossil records suggest these two species diverged about one million years ago, resulting in a northern and a southern species. The blue wildebeest remained in its original range and changed very little from the ancestral species, while the black wildebeest changed more as adaptation to its open grassland habitat in the south. The most obvious way of telling the two species apart are the differences in their colouring and in the way their horns are oriented.",
        url: "https://en.wikipedia.org/wiki/Wildebeest",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg/220px-Blue_Wildebeest%2C_Ngorongoro.jpg"
        },
        {
        name: "Goat",
        desc: "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat.&#91;1&#93; Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world.&#91;2&#93; Milk from goats is often turned into goat cheese.",
        url: "https://en.wikipedia.org/wiki/Goat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/220px-Hausziege_04.jpg"
        },
        {
        name: "Goldfinch",
        desc: "The European goldfinch or goldfinch (Carduelis carduelis), is a small passerine bird in the finch family that is native to Europe, North Africa and western Asia. It has been introduced to other areas including Australia, New Zealand and Uruguay.",
        url: "https://en.wikipedia.org/wiki/European_goldfinch",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Carduelis_carduelis_close_up.jpg/220px-Carduelis_carduelis_close_up.jpg"
        },
        {
        name: "Goosander",
        desc: "The common merganser (North American) or goosander (Eurasian) (Mergus merganser) is a large duck of rivers and lakes in forested areas of Europe, northern and central Asia, and North America.",
        url: "https://en.wikipedia.org/wiki/Common_merganser",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mergus_merganser_distr.png/220px-Mergus_merganser_distr.png"
        },
        {
        name: "Goose",
        desc: "A goose (plural geese) is a bird of any of several waterfowl species in the family Anatidae. This group comprises the genera Anser (the grey geese), Branta (the black geese), and Chen (which includes the white geese); the latter being commonly placed within the genus  Anser. Some other birds, mostly related to the shelducks, have 'goose' as part of their names. More distantly related members of the family Anatidae are swans, most of which are larger than true geese, and ducks, which are smaller.",
        url: "https://en.wikipedia.org/wiki/Goose",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Anser_anser_1_%28Piotr_Kuczynski%29.jpg/220px-Anser_anser_1_%28Piotr_Kuczynski%29.jpg"
        },
        {
        name: "Gorilla",
        desc: "Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa. The genus Gorilla is divided into two species: the eastern gorillas and the western gorillas (both critically endangered), and either four or five subspecies. They are the largest living primates. The DNA of gorillas is highly similar to that of humans, from 95 to 99% depending on what is included, and they are the next closest living relatives to humans after the chimpanzees and bonobos.",
        url: "https://en.wikipedia.org/wiki/Gorilla",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Male_gorilla_in_SF_zoo.jpg/220px-Male_gorilla_in_SF_zoo.jpg"
        },
        {
        name: "Goshawk",
        desc: "Goshawk may refer to several species of birds of prey, mainly in the genus Accipiter:",
        url: "https://en.wikipedia.org/wiki/Goshawk",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Collared_Sparrowhawk_kobble08.JPG/220px-Collared_Sparrowhawk_kobble08.JPG"
        },
        {
        name: "Grasshopper",
        desc: "Grasshoppers are a group of insects belonging to the suborder Caelifera. They are among what is probably the most ancient living group of chewing herbivorous insects, dating back to the early Triassic around 250 million years ago.",
        url: "https://en.wikipedia.org/wiki/Grasshopper",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/American_Bird_Grasshopper.jpg/220px-American_Bird_Grasshopper.jpg"
        },
        {
        name: "Grouse",
        desc: "Grouse /gra?s/ are a group of birds from the order Galliformes, in the family Phasianidae. Grouse are frequently assigned to the subfamily Tetraoninae (sometimes Tetraonidae), a classification supported by mitochondrial DNA sequence studies,&#91;1&#93; and applied by the American Ornithologists' Union,&#91;2&#93; ITIS,&#91;3&#93; and others.&#91;4&#93; Grouse inhabit temperate and subarctic regions of the Northern Hemisphere, from pine forests to moorland and mountainside,&#91;5&#93; from 83°N (rock ptarmigan in northern Greenland) to 28°N (Attwater's prairie chicken in Texas).&#91;6&#93;",
        url: "https://en.wikipedia.org/wiki/Grouse",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/SageGrouse21.jpg/220px-SageGrouse21.jpg"
        },
        {
        name: "Guanaco",
        desc: "The guanaco (Lama guanicoe) (from Quechua 'Wanaku', via Spanish)&#91;citation needed&#93; is a camelid native to South America, closely related to the llama. Its name comes from the Quechua word huanaco&#91;2&#93; (modern spelling wanaku). Young guanacos are called chulengos.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Guanaco",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Guanaco_de_San_Carlos.jpg/220px-Guanaco_de_San_Carlos.jpg"
        },
        {
        name: "Guinea fowl",
        desc: "Guineafowl (/'g?nifa?l/; sometimes called 'pet speckled hen', or 'original fowl') are birds of the family Numididae in the order Galliformes. They are endemic to  Africa and rank among the oldest of the gallinaceous birds. Phylogenetically, they branch off from the core Galliformes after the Cracidae and before the Odontophoridae.  An Eocene fossil lineage, Telecrex, has been associated with guineafowl. Telecrex inhabited Mongolia, and may have given rise to the oldest of the true Phasianids such as Ithaginis and Crossoptilon, which evolved into high-altitude montane-adapted species with the rise of the Tibetan Plateau.  While modern guineafowl species are endemic to Africa, the helmeted guineafowl has been introduced as a domesticated bird widely elsewhere.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Guinea_fowl",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Numida_meleagris_-Serengeti_National_Park%2C_Tanzania-8_%281%29.jpg/220px-Numida_meleagris_-Serengeti_National_Park%2C_Tanzania-8_%281%29.jpg"
        },
        {
        name: "Guinea pig",
        desc: "The  guinea pig or domestic guinea pig (Cavia porcellus), also known as cavy or domestic cavy, is a species of rodent belonging to the family Caviidae and the genus Cavia. Despite their common name, guinea pigs are not native to Guinea, nor are they biologically related to pigs, and the origin of the name is still unclear. They originated in the Andes of South America, and studies based on biochemistry and hybridization suggest they are domesticated descendants of a closely related species of cavy such as C. tschudii, and therefore do not exist naturally in the wild.&#91;1&#93;&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Guinea_pig",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Two_Adult_Guinea_Pigs_%28cropped%29.jpg/220px-Two_Adult_Guinea_Pigs_%28cropped%29.jpg"
        },
        {
        name: "Gull",
        desc: "Gulls or seagulls are seabirds of the family Laridae in the suborder Lari. They are most closely related to the terns (family Sternidae) and only distantly related to auks, skimmers, and more distantly to the waders. Until the 21st century, most gulls were placed in the genus Larus, but this arrangement is now considered polyphyletic, leading to the resurrection of several genera.&#91;1&#93; An older name for gulls is mews, cognate with German Möwe, Danish måge, Dutch meeuw, and French mouette; this term can still be found in certain regional dialects.&#91;2&#93;&#91;3&#93;&#91;4&#93;",
        url: "https://en.wikipedia.org/wiki/Gull",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Seagull_in_flight_by_Jiyang_Chen.jpg/220px-Seagull_in_flight_by_Jiyang_Chen.jpg"
        },
        {
        name: "Hamster",
        desc: "Hamsters are rodents (order Rodentia) belonging to the subfamily Cricetinae, which contains 18 species classified in seven genera.&#91;1&#93;&#91;2&#93; They have become established as popular small house pets.&#91;3&#93; The best-known species of hamster is the golden or Syrian hamster (Mesocricetus auratus), which is the type most commonly kept as pets. Other hamster species commonly kept as pets are the three species of dwarf hamster,  Campbell's dwarf hamster (Phodopus campbelli), the winter white dwarf hamster (Phodopus sungorus) and the Roborovski hamster (Phodopus roborovskii).",
        url: "https://en.wikipedia.org/wiki/Hamster",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg/220px-Pearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg"
        },
        {
        name: "Hare",
        desc: "Hares and jackrabbits are leporids belonging to the genus Lepus. Hares are classified in the same family as rabbits. They are similar in size and form to rabbits and have similar herbivorous diets, but generally have longer ears and live solitarily or in pairs. Also unlike rabbits, their young are able to fend for themselves shortly after birth rather than emerging blind and helpless. Most are fast runners. Hare species are native to Africa, Eurasia, North America, and the Japanese archipelago.",
        url: "https://en.wikipedia.org/wiki/Hare",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Scrub_Hare_%28Lepus_saxatilis%29_close-up_%2830544290256%29_%282%29.jpg/220px-Scrub_Hare_%28Lepus_saxatilis%29_close-up_%2830544290256%29_%282%29.jpg"
        },
        {
        name: "Hawk",
        desc: "Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.",
        url: "https://en.wikipedia.org/wiki/Hawk",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Red-tailed_Hawk.jpg/220px-Red-tailed_Hawk.jpg"
        },
        {
        name: "Hedgehog",
        desc: "A  hedgehog  is any of the spiny mammals of the subfamily Erinaceinae, in the eulipotyphlan family Erinaceidae. There are seventeen species of hedgehog in five genera found through parts of Europe, Asia, and Africa, and in New Zealand by introduction. There are no hedgehogs native to Australia and no living species native to the Americas (the extinct genus Amphechinus was once present in North America).",
        url: "https://en.wikipedia.org/wiki/Hedgehog",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Igel.JPG/220px-Igel.JPG"
        },
        {
        name: "Hermit crab",
        desc: "Hermit crabs are decapod crustaceans of the superfamily Paguroidea.&#91;1&#93;&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Hermit_crab",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Calliactis_and_Dardanus_001.JPG/220px-Calliactis_and_Dardanus_001.JPG"
        },
        {
        name: "Heron",
        desc: "The herons are long-legged freshwater and coastal birds in the family Ardeidae, with 64 recognised species, some of which are referred to as egrets or bitterns rather than herons. Members of the genera Botaurus and Ixobrychus are referred to as bitterns, and, together with the zigzag heron, or zigzag bittern, in the monotypic genus Zebrilus, form a monophyletic group within the Ardeidae. Egrets are not a biologically distinct group from the herons, and tend to be named differently because they are mainly white or have decorative plumes in breeding plumage. Herons, by evolutionary adaptation, have long beaks.",
        url: "https://en.wikipedia.org/wiki/Heron",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Le_Grand_Heron.jpg/220px-Le_Grand_Heron.jpg"
        },
        {
        name: "Herring",
        desc: "Herring are forage fish, mostly belonging to the family Clupeidae.",
        url: "https://en.wikipedia.org/wiki/Herring",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clupea_harengus_Gervais.flipped.jpg/300px-Clupea_harengus_Gervais.flipped.jpg"
        },
        {
        name: "Hippopotamus",
        desc: "The common hippopotamus (Hippopotamus amphibius), or hippo, is a large, mostly herbivorous, semiaquatic mammal and ungulate native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis).  The name comes from the ancient Greek for 'river horse' (?ππ?π?ταµ??). After the elephant and rhinoceros, the common hippopotamus is the third-largest type of land mammal and the heaviest extant artiodactyl. Despite their physical resemblance to pigs and other terrestrial even-toed ungulates, the closest living relatives of the Hippopotamidae are cetaceans (whales, dolphins, porpoises, etc.) from which they diverged about 55 million years ago.",
        url: "https://en.wikipedia.org/wiki/Hippopotamus",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hipop%C3%B3tamo_%28Hippopotamus_amphibius%29%2C_parque_nacional_de_Chobe%2C_Botsuana%2C_2018-07-28%2C_DD_82.jpg/220px-Hipop%C3%B3tamo_%28Hippopotamus_amphibius%29%2C_parque_nacional_de_Chobe%2C_Botsuana%2C_2018-07-28%2C_DD_82.jpg"
        },
        {
        name: "Hoatzin",
        desc: "The hoatzin (Opisthocomus hoazin), also known as the reptile bird, skunk bird, stinkbird, or Canje pheasant, is a species of tropical bird found in swamps, riparian forests, and mangroves of the Amazon and the Orinoco basins in South America. It is notable for having chicks that have claws on two of their wing digits.",
        url: "https://en.wikipedia.org/wiki/Hoatzin",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Hoatzin_-_Manu_NP_-_Per%C3%B9_9203_%2815525812066%29.jpg/220px-Hoatzin_-_Manu_NP_-_Per%C3%B9_9203_%2815525812066%29.jpg"
        },
        {
        name: "Hoopoe",
        desc: "Hoopoes (/'hu?pu?/) are colourful birds found across Afro-Eurasia, notable for their distinctive 'crown' of feathers. Three living and one extinct species are recognized, though for many years all were lumped as a single species-Upupa epops.",
        url: "https://en.wikipedia.org/wiki/Hoopoe",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Common_Hoopoe_%28Upupa_epops%29_Photograph_by_Shantanu_Kuveskar.jpg/220px-Common_Hoopoe_%28Upupa_epops%29_Photograph_by_Shantanu_Kuveskar.jpg"
        },
        {
        name: "Hornet",
        desc: "Hornets (insects in the genus Vespa) are the largest of the eusocial wasps, and are similar in appearance to their close relatives yellowjackets. Some species can reach up to 5.5&#160;cm (2.2&#160;in) in length. They are distinguished from other vespine wasps by the relatively large top margin of the head and by the rounded segment of the abdomen just behind the waist. Worldwide, there are 22 recognized species of Vespa,&#91;2&#93; Most species only occur in the tropics of Asia, though the European hornet (Vespa crabro), is widely distributed throughout Europe, Russia, North America and Northeast Asia. Wasps native to North America in the genus Dolichovespula are commonly referred to as hornets (e.g., baldfaced hornets), but are actually yellowjackets.",
        url: "https://en.wikipedia.org/wiki/Hornet",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hornet.jpg/220px-Hornet.jpg"
        },
        {
        name: "Horse",
        desc: "The horse (Equus ferus caballus)&#91;2&#93;&#91;3&#93; is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55&#160;million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today. Humans began domesticating horses around 4000 BC, and their domestication is believed to have been widespread by 3000 BC. Horses in the subspecies caballus are domesticated, although some domesticated populations live in the wild as feral horses. These feral populations are not true wild horses, as this term is used to describe horses that have never been domesticated, such as the endangered Przewalski's horse, a separate subspecies, and the only remaining true wild horse. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from anatomy to life stages, size, colors, markings, breeds, locomotion, and behavior.",
        url: "https://en.wikipedia.org/wiki/Horse",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nokota_Horses_cropped.jpg/220px-Nokota_Horses_cropped.jpg"
        },
        {
        name: "Hummingbird",
        desc: "Hummingbirds are birds native to the Americas and constitute the biological family Trochilidae. They are the smallest of birds, most species measuring 7.5-13&#160;cm (3-5&#160;in) in length. The smallest extant bird species is the 5&#160;cm (2.0&#160;in) bee hummingbird, which weighs less than 2.0&#160;g (0.07&#160;oz).",
        url: "https://en.wikipedia.org/wiki/Hummingbird",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Trinidad_and_Tobago_hummingbirds_composite.jpg/220px-Trinidad_and_Tobago_hummingbirds_composite.jpg"
        },
        {
        name: "Hyena",
        desc: "Hyenas or hyaenas (from Greek ?α??α hyaina&#91;1&#93;) are any feliform carnivoran mammals of the family Hyaenidae /ha?'?n?di?/. With only four extant species (in three genera), it is the fifth-smallest biological family in the Carnivora, and one of the smallest in the class Mammalia.&#91;2&#93; Despite their low diversity, hyenas are unique and vital components of most African ecosystems.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Hyena",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Spotted_hyena_%28Crocuta_crocuta%29.jpg/220px-Spotted_hyena_%28Crocuta_crocuta%29.jpg"
        },
        {
        name: "Ibex",
        desc: "An ibex (plural ibex, ibexes or ibices) is any of several species of wild mountain goat (genus Capra), distinguished by the male's large recurved horns, which are transversely ridged in front. Ibex are found in Eurasia, North Africa, and East Africa.  The name ibex comes from Latin, borrowed from Iberian or Aquitanian, akin to Old Spanish bezerro 'bull', modern Spanish becerro 'yearling'. Ranging in height from 27 to 43 inches (0.69 to 1.09&#160;m) and weighing 200 to 270 pounds (91 to 120&#160;kg), the ibex can live 20 years. Two closely related species of wild goats are not usually called ibex: the markhor and the wild goat.",
        url: "https://en.wikipedia.org/wiki/Ibex",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Capra_ibex_ibex.jpg/220px-Capra_ibex_ibex.jpg"
        },
        {
        name: "Ibis",
        desc: "The ibises (/a?'b?s/) (collective plural ibis;&#91;1&#93; classical plurals ibides&#91;2&#93;&#91;3&#93; and ibes&#91;3&#93;) are a group of long-legged wading birds in the family Threskiornithidae, that inhabit wetlands, forests and plains.&#91;4&#93; 'Ibis' derives from the Latin and Ancient Greek word for this group of birds. It also occurs in the scientific name of the cattle egret, (Bubulcus ibis), mistakenly identified in 1757 as being the sacred ibis.&#91;5&#93;",
        url: "https://en.wikipedia.org/wiki/Ibis",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Black-headed_Ibis_%28Threskiornis_melanocephalus%29.jpg/220px-Black-headed_Ibis_%28Threskiornis_melanocephalus%29.jpg"
        },
        {
        name: "Iguana",
        desc: "Iguana (/?'gw??n?/,&#91;1&#93;&#91;2&#93; Spanish:&#160;[i'?wana]) is a genus of herbivorous lizards that are native to tropical areas of Mexico, Central America, South America, and the Caribbean. The genus was first described in 1768 by Austrian naturalist Josephus Nicolaus Laurenti in his book Specimen Medicum, Exhibens Synopsin Reptilium Emendatam cum Experimentis circa Venena. Two species are included in the genus Iguana: the green iguana, which is widespread throughout its range and a popular pet, and the Lesser Antillean iguana, which is native to the Lesser Antilles and endangered due to habitat destruction, introduced feral predators, hunting, and hybridization with introduced green iguanas.",
        url: "https://en.wikipedia.org/wiki/Iguana",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/220px-Portrait_of_an_Iguana.jpg"
        },
        {
        name: "Impala",
        desc: "The impala (/?m'p??l?, -'pæl?/, Aepyceros melampus) is a medium-sized antelope found in eastern and southern Africa. The sole member of the genus Aepyceros, it was first described to European audiences by German zoologist Hinrich Lichtenstein in 1812. Two subspecies are recognised-the common impala, and the larger and darker black-faced impala. The impala reaches 70-92 centimetres (28-36 inches) at the shoulder and weighs 40-76&#160;kg (88-168&#160;lb). It features a glossy, reddish brown coat. The male's slender, lyre-shaped horns are 45-92 centimetres (18-36 inches) long.",
        url: "https://en.wikipedia.org/wiki/Impala",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Trotting_impala_ram%2C_crop.jpg/220px-Trotting_impala_ram%2C_crop.jpg"
        },
        {
        name: "Jackal",
        desc: "Jackals are medium-sized omnivorous mammals of the genus Canis, which also includes wolves, coyotes and the domestic dog. While the word 'jackal' has historically been used for many small canids, in modern use it most commonly refers to three species: the closely related black-backed jackal and side-striped jackal of sub-Saharan Africa, and the golden jackal of south-central Eurasia, which is more closely related to other members of the genus Canis.",
        url: "https://en.wikipedia.org/wiki/Jackal",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flickr_-_Rainbirder_-_Golden_Jackal_%281%29.jpg/220px-Flickr_-_Rainbirder_-_Golden_Jackal_%281%29.jpg"
        },
        {
        name: "Jaguar",
        desc: "The jaguar (Panthera onca) is a large felid species and the only extant member of the genus Panthera native to the Americas. The jaguar's present range extends from Southwestern United States and Mexico in North America, across much of Central America, and south to Paraguay and northern Argentina in South America. Though there are single cats now living within the Western United States, the species has largely been extirpated from the United States since the early 20th century. It is listed as Near Threatened on the IUCN Red List; and its numbers are declining. Threats include loss and fragmentation of habitat.",
        url: "https://en.wikipedia.org/wiki/Jaguar",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Jaguar_%28Panthera_onca_palustris%29_male_Three_Brothers_River.JPG/220px-Jaguar_%28Panthera_onca_palustris%29_male_Three_Brothers_River.JPG"
        },
        {
        name: "Jay",
        desc: "Jays are several species of medium-sized, usually colorful and noisy, passerine birds in the crow family, Corvidae. The names jay and magpie are somewhat interchangeable, and the evolutionary relationships are rather complex. For example, the Eurasian magpie seems more closely related to the Eurasian jay than to the East Asian blue and green magpies, whereas the blue jay is not closely related to either.",
        url: "https://en.wikipedia.org/wiki/Jay",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Garrulus_glandarius_1_Luc_Viatour.jpg/220px-Garrulus_glandarius_1_Luc_Viatour.jpg"
        },
        {
        name: "Jellyfish",
        desc: "Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria. Jellyfish are mainly free-swimming marine animals with umbrella-shaped bells and trailing tentacles, although a few are not mobile, being anchored to the seabed by stalks.  The bell can pulsate to provide propulsion and highly efficient locomotion. The tentacles are armed with stinging cells and may be used to capture prey and defend against predators. Jellyfish have a complex life cycle; the medusa is normally the sexual phase, the planula larva can disperse widely and is followed by a sedentary polyp phase.",
        url: "https://en.wikipedia.org/wiki/Jellyfish",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jelly_cc11.jpg/220px-Jelly_cc11.jpg"
        },
        {
        name: "Jerboa",
        desc: "Jerboas (from Arabic: ?????&#8206; jarbu?&#160;) form the bulk of the membership of the family Dipodidae. Jerboas are hopping desert rodents found throughout Arabia, Northern Africa and Asia.&#91;1&#93; They tend to live in hot deserts.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Jerboa",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Four-toes-jerboa.jpg/220px-Four-toes-jerboa.jpg"
        },
        {
        name: "Kangaroo",
        desc: "The kangaroo is a marsupial from the family Macropodidae (macropods, meaning 'large foot'). In common use the term is used to describe the largest species from this family, especially those of the genus Macropus: the red kangaroo, antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.&#91;1&#93; Kangaroos are indigenous to Australia. The Australian government estimates that 34.3 million kangaroos lived within the commercial harvest areas of Australia in 2011, up from 25.1 million one year earlier.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Kangaroo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG/220px-Kangaroo_Australia_01_11_2008_-_retouch.JPG"
        },
        {
        name: "Kingfisher",
        desc: "Kingfishers or Alcedinidae are a family of small to medium-sized, brightly colored birds in the order Coraciiformes. They have a cosmopolitan distribution, with most species found in the tropical regions of Africa, Asia, and Oceania. The family contains 114 species and is divided into three subfamilies and 19 genera. All kingfishers have large heads, long, sharp, pointed bills, short legs, and stubby tails. Most species have bright plumage with only small differences between the sexes. Most species are tropical in distribution, and a slight majority are found only in forests. They consume a wide range of prey usually caught by swooping down from a perch. While kingfishers are usually thought to live near rivers and eat fish, many species live away from water and eat small invertebrates. Like other members of their order, they nest in cavities, usually tunnels dug into the natural or artificial banks in the ground. Some kingfishers nest in arboreal termite nests. A few species, principally insular forms, are threatened with extinction. In Britain, the word 'kingfisher' normally refers to the common kingfisher.",
        url: "https://en.wikipedia.org/wiki/Kingfisher",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Alcedo_azurea_-_Julatten.jpg/220px-Alcedo_azurea_-_Julatten.jpg"
        },
        {
        name: "Kinkajou",
        desc: "The kinkajou (/'k??k?d?u?/ KING-k?-joo) (Potos flavus) is a tropical rainforest mammal of the family Procyonidae related to olingos, coatis, raccoons, and the ringtail and cacomistle. It is the only member of the genus Potos and is also known as the 'honey bear' (a name that it shares with the unrelated sun bear). Kinkajous are arboreal, a lifestyle they evolved independently; they are not closely related to any other tree-dwelling mammal group (primates, some mustelids, etc.).",
        url: "https://en.wikipedia.org/wiki/Kinkajou",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Kinkajou.jpg/220px-Kinkajou.jpg"
        },
        {
        name: "Koala",
        desc: "The koala (Phascolarctos cinereus, or, inaccurately, koala bear&#91;a&#93;) is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which comprise the family Vombatidae. The koala is found in coastal areas of the mainland's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia. It is easily recognisable by its stout, tailless body and large head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60-85&#160;cm (24-33&#160;in) and weighs 4-15&#160;kg (9-33&#160;lb). Pelage colour ranges from silver grey to chocolate brown. Koalas from the northern populations are typically smaller and lighter in colour than their counterparts further south. These populations possibly are separate subspecies, but this is disputed.",
        url: "https://en.wikipedia.org/wiki/Koala",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/240px-Koala_climbing_tree.jpg"
        },
        {
        name: "Komodo dragon",
        desc: "The Komodo dragon&#91;4&#93; (Varanus komodoensis), also known as the Komodo monitor, is a species of lizard found in the Indonesian islands of Komodo, Rinca, Flores, and Gili Motang.&#91;5&#93; A member of the monitor lizard family Varanidae, it is the largest living species of lizard, growing to a maximum length of 3 metres (10&#160;ft) in rare cases and weighing up to approximately 70 kilograms (150&#160;lb).&#91;5&#93;",
        url: "https://en.wikipedia.org/wiki/Komodo_dragon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Komodo_dragon_with_tongue.jpg/220px-Komodo_dragon_with_tongue.jpg"
        },
        {
        name: "Kookaburra",
        desc: "Kookaburras are terrestrial tree kingfishers of the genus Dacelo native to Australia and New Guinea, which grow to between 28-42&#160;cm (11-17&#160;in) in length. The name is a loanword from Wiradjuri guuguubarra, onomatopoeic of its call. The loud distinctive call of the laughing kookaburra is widely used as a stock sound effect in situations that involve an Australian bush setting or tropical jungle, especially in older movies.",
        url: "https://en.wikipedia.org/wiki/Kookaburra",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Dacelo_novaeguineae_waterworks.jpg/220px-Dacelo_novaeguineae_waterworks.jpg"
        },
        {
        name: "Kouprey",
        desc: "The kouprey (Bos sauveli, from Khmer: ??????, Khmer pronunciation: [ko? pr?j], 'forest ox'; also known as kouproh, 'grey ox') is a little-known, forest-dwelling, wild bovine species from Southeast Asia. A young male was sent to the Vincennes Zoo in 1937 where it was described by the French zoologist Achille Urbain and was declared the holotype. The kouprey has a tall, narrow body, long legs, a humped back and long horns.",
        url: "https://en.wikipedia.org/wiki/Kouprey",
        imgUrl: "//upload.wikimedia.org/wikipedia/en/thumb/2/27/Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg/220px-Kouprey_at_Vincennes_Zoo_in_Paris_by_Georges_Broihanne_1937.jpg"
        },
        {
        name: "Kudu",
        desc: "The kudus are two species of antelope of the genus Tragelaphus:",
        url: "https://en.wikipedia.org/wiki/Kudu",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Male_Kudu_Eating.jpg/220px-Male_Kudu_Eating.jpg"
        },
        {
        name: "Lapwing",
        desc: "Vanellinae are any of various crested plovers, family Charadriidae, noted for its slow, irregular wingbeat in flight and a shrill, wailing cry.  Its length is 10-16&#160;inches.  They are a subfamily of medium-sized wading birds which also includes the plovers and dotterels.  The Vanellinae are collectively called lapwings but also contain the ancient red-kneed dotterel. A lapwing can be thought of as a larger plover.",
        url: "https://en.wikipedia.org/wiki/Lapwing",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Vanellus_armatus_%28taxobox%29.jpg/220px-Vanellus_armatus_%28taxobox%29.jpg"
        },
        {
        name: "Lark",
        desc: "Larks are passerine birds of the family Alaudidae. Larks have a cosmopolitan distribution with the largest number of species occurring in Africa. Only a single species, the horned lark, occurs in North America, and only Horsfield's bush lark occurs in Australia.  Habitats vary widely, but many species live in dry regions.",
        url: "https://en.wikipedia.org/wiki/Lark",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alauda_arvensis_2.jpg/220px-Alauda_arvensis_2.jpg"
        },
        {
        name: "Lemur",
        desc: "Lemurs (/'li?m?r/&#32;(listen) LEE-m?r) (from Latin lemures - ghosts or spirits) are mammals of the order Primates, divided into 8 families and consisting of 15 genera and around 100 existing species. They are native only to the island of Madagascar. Most existing lemurs are small, have a pointed snout, large eyes, and a long tail. They chiefly live in trees (arboreal), and are active at night (nocturnal).",
        url: "https://en.wikipedia.org/wiki/Lemur",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lemuroidea.jpg/220px-Lemuroidea.jpg"
        },
        {
        name: "Leopard",
        desc: "The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the Felidae.&#91;3&#93; It occurs in a wide range in sub-Saharan Africa, in small parts of Western and Central Asia, on the Indian subcontinent to Southeast and East Asia. It is listed as Vulnerable on the IUCN Red List because leopard populations are threatened by habitat loss and fragmentation, and are declining in large parts of the global range. In Hong Kong, Singapore, Kuwait, Syria, Libya, Tunisia and most likely in Morocco, leopard populations have already been extirpated.&#91;2&#93; Contemporary records suggest that the leopard occurs in only 25% of its historical global range.&#91;4&#93;&#91;5&#93; Leopards are hunted illegally, and their body parts are smuggled in the wildlife trade for medicinal practices and decoration.&#91;6&#93;&#91;7&#93;",
        url: "https://en.wikipedia.org/wiki/Leopard",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Namibie_Etosha_Leopard_01edit.jpg/220px-Namibie_Etosha_Leopard_01edit.jpg"
        },
        {
        name: "Lion",
        desc: "The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. The lion is sexually dimorphic; males are larger than females with a typical weight range of 150 to 250&#160;kg (330 to 550&#160;lb) for males and 120 to 182&#160;kg (265 to 400&#160;lb) for females. Male lions have a prominent mane, which is the most recognisable feature of the species. Lions are social, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions typically hunt together, preying mostly on large ungulates. The species is an apex and keystone predator, although they scavenge when opportunities occur. Some lions have been known to hunt humans, although the species typically does not.",
        url: "https://en.wikipedia.org/wiki/Lion",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg"
        },
        {
        name: "Lizard",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species,&#91;1&#93; ranging across all continents except Antarctica, as well as most oceanic island chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia; some lizards are more closely related to these two excluded groups than they are to other lizards. Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon.",
        url: "https://en.wikipedia.org/wiki/Lizard",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lizard_Collage.jpg/220px-Lizard_Collage.jpg"
        },
        {
        name: "Llama",
        desc: "The llama (/'l??m?/; Spanish pronunciation:&#160;['?ama]) (Lama glama) is a domesticated South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era.",
        url: "https://en.wikipedia.org/wiki/Llama",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
        },
        {
        name: "Lobster",
        desc: "Lobsters are a family (Nephropidae, sometimes also Homaridae) of large marine crustaceans.",
        url: "https://en.wikipedia.org/wiki/Lobster",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/KreeftbijDenOsse.jpg/220px-KreeftbijDenOsse.jpg"
        },
        {
        name: "Locust",
        desc: "Locusts are certain species of short-horned grasshoppers in the family Acrididae that have a swarming phase. These insects are usually solitary, but under certain circumstances they become more abundant and change their behaviour and habits, becoming gregarious.  No taxonomic distinction is made between locust and grasshopper species; the basis for the definition is whether a species forms swarms under intermittently suitable conditions. These grasshoppers are innocuous, their numbers are low, and they do not pose a major economic threat to agriculture. However, under suitable conditions of drought followed by rapid vegetation growth, serotonin in their brains triggers a dramatic set of changes: they start to breed abundantly, becoming gregarious and nomadic (loosely described as migratory) when their populations become dense enough. They form bands of wingless nymphs which later become swarms of winged adults. Both the bands and the swarms move around and rapidly strip fields and cause damage to crops. The adults are powerful fliers; they can travel great distances, consuming most of the green vegetation wherever the swarm settles.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Locust",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Locusta-migratoria-wanderheuschrecke.jpg/220px-Locusta-migratoria-wanderheuschrecke.jpg"
        },
        {
        name: "Loris",
        desc: "Loris is the common name for the strepsirrhine primates of the subfamily Lorinae&#91;1&#93; (sometimes spelled Lorisinae&#91;2&#93;) in the family Lorisidae. Loris is one genus in this subfamily and includes the slender lorises, while Nycticebus is the genus containing the slow lorises.",
        url: "https://en.wikipedia.org/wiki/Loris",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Smit.Faces_of_Lorises.jpg/220px-Smit.Faces_of_Lorises.jpg"
        },
        {
        name: "Louse",
        desc: "Louse (plural: lice) is the common name for members of the order Phthiraptera, which contains nearly 5,000 species of wingless insect. Lice are obligate parasites, living externally on warm-blooded hosts which include every species of bird and mammal, except for monotremes, pangolins, and bats. Lice are vectors of diseases such as typhus.",
        url: "https://en.wikipedia.org/wiki/Louse",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fahrenholzia_pinnata.JPG/220px-Fahrenholzia_pinnata.JPG"
        },
        {
        name: "Lynx",
        desc: "A lynx (/l??ks/;&#91;2&#93; plural lynx or lynxes&#91;3&#93;) is any of the four species (Canada&#160;lynx, Iberian&#160;lynx, Eurasian&#160;lynx, bobcat) within the medium-sized wild cat genus Lynx. The name lynx originated in Middle English via Latin from the Greek word ????,&#91;2&#93; derived from the Indo-European root leuk- ('light, brightness')&#91;4&#93; in reference to the luminescence of its reflective eyes.&#91;4&#93;",
        url: "https://en.wikipedia.org/wiki/Lynx",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lynx_lynx_poing.jpg/220px-Lynx_lynx_poing.jpg"
        },
        {
        name: "Lyrebird",
        desc: "A lyrebird is either of two species of ground-dwelling Australian birds that compose the genus Menura, and the family Menuridae. They are most notable for their superb ability to mimic natural and artificial sounds from their environment, and the striking beauty of the male bird's huge tail when it is fanned out in courtship display.  Lyrebirds have unique plumes of neutral-coloured tailfeathers and are among Australia's best-known native birds.",
        url: "https://en.wikipedia.org/wiki/Lyrebird",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Superb_lyrbird_in_scrub.jpg/220px-Superb_lyrbird_in_scrub.jpg"
        },
        {
        name: "Macaque",
        desc: "The macaques (/m?'k??k/ or /m?'kæk/&#91;2&#93;) constitute a genus (Macaca) of Old World monkeys of the subfamily Cercopithecinae. The 23 species of macaques are distributed throughout Asia, North Africa and (in one instance) Gibraltar. Macaques are principally frugivorous, although their diet also includes seeds, leaves, flowers, and tree bark, and some, such as the crab-eating macaque, subsist on a diet of invertebrates and occasionally small vertebrates.  Macaques are found in a variety of habitats throughout the Asian continent, and are extremely adaptable.  All macaque social groups are matriarchal, arranged around dominant females.&#91;3&#93; They also have learned to live with humans, and have become an invasive species in some human inhabited landscapes, such as the island of Mauritius and Silver Springs State Park in Florida.  Macaques can be a threat to conservation, along with a threat to human wellbeing through carrying transmittable and fatal diseases.  Currently, macaques as an invasive species are handled with several control methods.",
        url: "https://en.wikipedia.org/wiki/Macaque",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg"
        },
        {
        name: "Macaw",
        desc: "Macaws are long-tailed, often colorful New World parrots.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Macaw",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Blue-and-Yellow-Macaw.jpg/240px-Blue-and-Yellow-Macaw.jpg"
        },
        {
        name: "Magpie",
        desc: "Magpies are birds of the Corvidae (crow) family. The black and white Eurasian magpie is widely considered one of the most intelligent animals in the world&#91;1&#93;&#91;2&#93;&#91;3&#93; and one of only a few non-mammal species able to recognize itself in a mirror test.&#91;4&#93; In addition to other members of the genus Pica, corvids considered as magpies are in the genera Cissa.",
        url: "https://en.wikipedia.org/wiki/Magpie",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Magpie_arp.jpg/250px-Magpie_arp.jpg"
        },
        {
        name: "Mallard",
        desc: "The mallard (/'mæl??rd/ or /'mæl?rd/) (Anas platyrhynchos) is a dabbling duck that breeds throughout the temperate and subtropical Americas, Eurasia, and North Africa and has been introduced to New Zealand, Australia, Peru, Brazil, Uruguay, Argentina, Chile, Colombia, the Falkland Islands, and South Africa. This duck belongs to the subfamily Anatinae of the waterfowl family Anatidae. The male birds (drakes) have a glossy green head and are grey on their wings and belly, while the females (hens or ducks) have mainly brown-speckled plumage. Both sexes have an area of white-bordered black or iridescent blue feathers called a speculum on their wings; males especially tend to have blue speculum feathers. The mallard is 50-65&#160;cm (20-26&#160;in) long, of which the body makes up around two-thirds the length. The wingspan is 81-98&#160;cm (32-39&#160;in) and the bill is 4.4 to 6.1&#160;cm (1.7 to 2.4&#160;in) long. It is often slightly heavier than most other dabbling ducks, weighing 0.72-1.58&#160;kg (1.6-3.5&#160;lb). Mallards live in wetlands, eat water plants and small animals, and are social animals preferring to congregate in groups or flocks of varying sizes. This species is the main ancestor of most breeds of domesticated ducks.",
        url: "https://en.wikipedia.org/wiki/Mallard",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/220px-Anas_platyrhynchos_male_female_quadrat.jpg"
        },
        {
        name: "Mammoth",
        desc: "A mammoth is any species of the extinct genus Mammuthus, one of the many genera that make up the order of trunked mammals called proboscideans. The various species of mammoth were commonly equipped with long, curved tusks and, in northern species, a covering of long hair. They lived from the Pliocene epoch (from around 5&#160;million years ago) into the Holocene at about 4,000 years ago, and various species existed in Africa, Europe, Asia, and North America. They were members of the family Elephantidae, which also contains the two genera of modern elephants and their ancestors.",
        url: "https://en.wikipedia.org/wiki/Mammoth",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Columbian_mammoth.JPG/220px-Columbian_mammoth.JPG"
        },
        {
        name: "Manatee",
        desc: "Manatees (family Trichechidae, genus Trichechus) are large, fully aquatic, mostly herbivorous marine mammals sometimes known as sea cows. There are three accepted living species of Trichechidae, representing three of the four living species in the order Sirenia: the Amazonian manatee (Trichechus inunguis), the West Indian manatee (Trichechus manatus), and the West African manatee (Trichechus senegalensis). They measure up to 4.0 metres (13.1&#160;ft) long, weigh as much as 590 kilograms (1,300&#160;lb),&#91;2&#93; and have paddle-like flippers. The etymology of the name is dubious, with connections having been made to Latin 'manus' (hand), and to a word sometimes cited as 'manati' used by the Taíno, a pre-Columbian people of the Caribbean, meaning 'breast'.&#91;3&#93; Manatees are occasionally called sea cows, as they are slow plant-eaters, peaceful and similar to cows on land. They often graze on water plants in tropical seas.&#91;4&#93;",
        url: "https://en.wikipedia.org/wiki/Manatee",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/FL_fig04.jpg/220px-FL_fig04.jpg"
        },
        {
        name: "Mandrill",
        desc: "The mandrill (Mandrillus sphinx) is a primate of the Old World monkey (Cercopithecidae) family.&#91;4&#93; It is one of two species assigned to the genus Mandrillus, along with the drill. Both the mandrill and the drill were once classified as baboons in the genus Papio, but they now have their own genus, Mandrillus.&#91;4&#93; Although they look superficially like baboons, they are more closely related to Cercocebus mangabeys. Mandrills are found in southern Cameroon, Gabon, Equatorial Guinea, and Congo. Mandrills mostly live in tropical rainforests. They live in very large groups. Mandrills have an omnivorous diet consisting mostly of fruits and insects. Their mating season peaks in July to September, with a corresponding birth peak in December to April.",
        url: "https://en.wikipedia.org/wiki/Mandrill",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mandrill_Albert_September_2015_Zoo_Berlin_%282%29.jpg/220px-Mandrill_Albert_September_2015_Zoo_Berlin_%282%29.jpg"
        },
        {
        name: "Marmoset",
        desc: "The marmosets (/'m??rm??z?ts, -?s?ts/&#91;3&#93;&#91;4&#93;), also known as zaris, are twenty-two New World monkey species of the genera Callithrix, Cebuella, Callibella and Mico. All four genera are part of the biological family Callitrichidae. The term marmoset is also used in reference to the Goeldi's marmoset, Callimico goeldii, which is closely related.",
        url: "https://en.wikipedia.org/wiki/Marmoset",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Marmoset_copy.jpg/220px-Marmoset_copy.jpg"
        },
        {
        name: "Marmot",
        desc: "Marmots are large squirrels in the genus Marmota, with 15 species.",
        url: "https://en.wikipedia.org/wiki/Marmot",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Marmot-edit1.jpg/220px-Marmot-edit1.jpg"
        },
        {
        name: "Meerkat",
        desc: "The meerkat or suricate (Suricata suricatta) is a small carnivoran belonging to the mongoose family (Herpestidae). It is the only member of the genus Suricata.&#91;3&#93; Meerkats live in all parts of the Kalahari Desert in Botswana, in much of the Namib Desert in Namibia and southwestern Angola, and in South Africa. A group of meerkats is called a 'mob', 'gang' or 'clan'. A meerkat clan often contains about 20 meerkats, but some super-families have 50 or more members. In captivity, meerkats have an average life span of 12-14 years, and about half this in the wild.",
        url: "https://en.wikipedia.org/wiki/Meerkat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg/220px-Meerkat_%28Suricata_suricatta%29_Tswalu.jpg"
        },
        {
        name: "Mink",
        desc: "Mink are dark-colored, semiaquatic, carnivorous mammals of the genera Neovison and Mustela, and part of the family Mustelidae which also includes weasels, otters and ferrets. There are two extant species referred to as 'mink': the American mink and the European mink. The extinct sea mink is related to the American mink, but was much larger. The American mink is larger and more adaptable than the European mink but, due to variations in size, an individual mink usually cannot be determined as European or American with certainty without looking at the skeleton; however, all European mink have a large white patch on their upper lip, whereas only some American mink have this marking: therefore, any mink without the patch is certainly of the American species. Taxonomically, both American and European mink were placed in the same genus Mustela, but most recently, the American mink has been reclassified as belonging to its own genus, Neovison.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Mink",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/American_Mink.jpg/220px-American_Mink.jpg"
        },
        {
        name: "Mole",
        desc: "Moles are small mammals adapted to a subterranean lifestyle (i.e., fossorial). They have cylindrical bodies; velvety fur; very small, inconspicuous ears and eyes;&#91;1&#93; reduced hindlimbs; and short, powerful forelimbs with large paws adapted for digging.",
        url: "https://en.wikipedia.org/wiki/Mole_(animal)",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kret_mole.jpg/220px-Kret_mole.jpg"
        },
        {
        name: "Mongoose",
        desc: "Mongoose is the popular English name for 29 of the 34&#91;2&#93; species in the 14 genera of the family Herpestidae, which are small feliform carnivorans native to southern Eurasia and mainland Africa. The other five species (all African) in the family are the four kusimanses in the genus Crossarchus, and the species Suricata suricatta, commonly called meerkat in English.",
        url: "https://en.wikipedia.org/wiki/Mongoose",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Herpestidae.png/220px-Herpestidae.png"
        },
        {
        name: "Monkey",
        desc: "Monkey is a common name that may refer to groups or species of mammals, in part, the simians of infraorder Simiiformes. The term is applied descriptively to groups of primates, such as families of new world monkeys and old world monkeys. Many monkey species are tree-dwelling (arboreal), although there are species that live primarily on the ground, such as baboons. Most species are also active during the day (diurnal). Monkeys are generally considered to be intelligent, especially the old world monkeys of Catarrhini.",
        url: "https://en.wikipedia.org/wiki/Monkey",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Macaca_sinica_-_01.jpg/220px-Macaca_sinica_-_01.jpg"
        },
        {
        name: "Moose",
        desc: "The moose (North America) or elk (Eurasia), Alces alces, is a member of the New World deer subfamily and is the largest and heaviest extant species in the deer family. Moose are distinguished by the broad, palmate (open-hand shaped) antlers of the males; other members of the deer family have antlers with a dendritic ('twig-like') configuration. Moose typically inhabit boreal forests and temperate broadleaf and mixed forests of the Northern Hemisphere in temperate to subarctic climates. Hunting and other human activities have caused a reduction in the size of the moose's range over time. Moose have been reintroduced to some of their former habitats. Currently, most moose are found in Canada, Alaska, New England (with Maine having the most of the lower 48 states), Fennoscandia, Baltic states, and Russia. Their diet consists of both terrestrial and aquatic vegetation. The most common moose predators are the gray wolf along with bears and humans. Unlike most other deer species, moose do not form herds and are solitary animals, aside from calves who remain with their mother until the cow begins estrus (typically at 18 months after birth of the calf), at which point the cow chases away young bulls. Although generally slow-moving and sedentary, moose can become aggressive and move quickly if angered or startled. Their mating season in the autumn features energetic fights between males competing for a female.",
        url: "https://en.wikipedia.org/wiki/Moose",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/220px-Moose_superior.jpg"
        },
        {
        name: "Mosquito",
        desc: "Mosquitoes (alternate spelling mosquitos) are a group of about 3500 species of small insects that are flies (order Diptera). Within Diptera they constitute the family Culicidae (from the Latin culex meaning 'gnat'). The word 'mosquito' (formed by mosca and diminutive -ito)&#91;2&#93; is Spanish for 'little fly'.&#91;3&#93; Mosquitoes have a slender segmented body, a pair of wings, three pairs of long hair-like legs, feathery antennae, and elongated mouthparts.",
        url: "https://en.wikipedia.org/wiki/Mosquito",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mosquito_2007-2.jpg/220px-Mosquito_2007-2.jpg"
        },
        {
        name: "Mouse",
        desc: "A mouse, plural mice, is a small rodent characteristically having a pointed snout, small rounded ears, a body-length scaly tail, and a high breeding rate. The best known mouse species is the common house mouse (Mus musculus). It is also a popular pet. In some places, certain kinds of field mice are locally common. They are known to invade homes for food and shelter.",
        url: "https://en.wikipedia.org/wiki/Mouse",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg/220px-%D0%9C%D1%8B%D1%88%D1%8C_2.jpg"
        },
        {
        name: "Myna",
        desc: "The myna (/'ma?n?/; also spelled mynah) is a bird of the starling family (Sturnidae). This is a group of passerine birds which are native to southern Asia, especially Nepal, India, Pakistan and Bangladesh . Several species have been introduced to areas like North America, Australia, South Africa, Fiji and New Zealand, especially the common myna which is often regarded as an invasive species. It is often known as 'Selarang' and 'Teck Meng' in Malay and Chinese respectively in Singapore, due to their high population there. Similarly, in Nepal, it is known by local name Dangre.",
        url: "https://en.wikipedia.org/wiki/Myna",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/97/Baliespreeuw.jpg/220px-Baliespreeuw.jpg"
        },
        {
        name: "Narwhal",
        desc: "The narwhal (Monodon monoceros), or narwhale, is a medium-sized toothed whale that possesses a large 'tusk' from a protruding canine tooth. It lives year-round in the Arctic waters around Greenland, Canada, and Russia. It is one of two living species of whale in the family Monodontidae, along with the beluga whale. The narwhal males are distinguished by a long, straight, helical tusk, which is an elongated upper left canine. The narwhal was one of many species described by Carl Linnaeus in his publication Systema Naturae in 1758.",
        url: "https://en.wikipedia.org/wiki/Narwhal",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Narwhalsk.jpg/220px-Narwhalsk.jpg"
        },
        {
        name: "Newt",
        desc: "A newt is a salamander in the subfamily Pleurodelinae. The terrestrial juvenile phase is called an eft. Unlike other members of the family Salamandridae, newts are semiaquatic, alternating between aquatic and terrestrial habitats. Not all aquatic salamanders are considered newts, however. More than 100 known species of newts are found in North America, Europe, North Africa and Asia. Newts metamorphose through three distinct developmental life stages: aquatic larva, terrestrial juvenile (eft), and adult. Adult newts have lizard-like bodies and return to the water every year to breed, otherwise living in humid, cover-rich land habitats.",
        url: "https://en.wikipedia.org/wiki/Newt",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Neurergus_Kaiseri.jpg/220px-Neurergus_Kaiseri.jpg"
        },
        {
        name: "Nightingale",
        desc: "The common nightingale or simply nightingale (Luscinia megarhynchos), also known as rufous nightingale, is a small passerine bird best known for its powerful and beautiful song. It was formerly classed as a member of the thrush family Turdidae, but is now more generally considered to be an Old World flycatcher, Muscicapidae.&#91;2&#93; It belongs to a group of more terrestrial species, often called chats.",
        url: "https://en.wikipedia.org/wiki/Nightingale",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Luscinia_megarhynchos_-_01.jpg/220px-Luscinia_megarhynchos_-_01.jpg"
        },
        {
        name: "Nine-banded armadillo",
        desc: "The nine-banded armadillo (Dasypus novemcinctus), or the nine-banded, long-nosed armadillo, is a medium-sized mammal found in North, Central, and South America, making it the most widespread of the armadillos.&#91;2&#93; Its ancestors originated in South America, and remained there until the formation of the Isthmus of Panama allowed them to enter North America as part of the Great American Interchange. The nine-banded armadillo is a solitary, mainly nocturnal&#91;3&#93;&#91;4&#93; animal, found in many kinds of habitats, from mature and secondary rainforests to grassland and dry scrub. It is an insectivore, feeding chiefly on ants, termites, and other small invertebrates. The armadillo can jump 3-4&#160;ft (91-122&#160;cm) straight in the air if sufficiently frightened, making it a particular danger on roads.&#91;5&#93; It is the state small mammal of Texas.",
        url: "https://en.wikipedia.org/wiki/Nine-banded_armadillo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Florida-015.jpg/220px-Florida-015.jpg"
        },
        {
        name: "Octopus",
        desc: "The octopus is a soft-bodied, eight-limbed mollusc of the order Octopoda. Around 300 species are recognised, and the order is grouped within the class Cephalopoda with squids, cuttlefish, and nautiloids. Like other cephalopods, the octopus is bilaterally symmetric with two eyes and a beak, with its mouth at the center point of the eight limbs ('tentacle' is used as an umbrella term for cephalopod limbs; however, within a teuthological context; 'arm' is used to refer to such limbs while 'tentacle' is reserved for feeding appendages not found on octopuses). The soft body can rapidly alter its shape, enabling octopuses to squeeze through small gaps. They trail their eight appendages behind them as they swim. The siphon is used both for respiration and for locomotion, by expelling a jet of water. Octopuses have a complex nervous system and excellent sight, and are among the most intelligent and behaviourally diverse of all invertebrates.",
        url: "https://en.wikipedia.org/wiki/Octopus",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/220px-Octopus2.jpg"
        },
        {
        name: "Okapi",
        desc: "The okapi (/o?'k??pi?/; Okapia johnstoni), also known as the forest giraffe, Congolese giraffe, or zebra giraffe, is an artiodactyl mammal native to the northeast of the Democratic Republic of the Congo in Central Africa. Although the okapi has striped markings reminiscent of zebras, it is most closely related to the giraffe. The okapi and the giraffe are the only living members of the family Giraffidae.",
        url: "https://en.wikipedia.org/wiki/Okapi",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Saint-Aignan_%28Loir-et-Cher%29._Okapi.jpg/220px-Saint-Aignan_%28Loir-et-Cher%29._Okapi.jpg"
        },
        {
        name: "Opossum",
        desc: "The opossum (/?'p?s?m/ or /p?s?m/) is a marsupial of the order Didelphimorphia (/da??d?lf?'m??rfi?/) endemic to the Americas. The largest order of marsupials in the Western Hemisphere, it comprises 103 or more species in 19 genera. Opossums originated in South America and entered North America in the Great American Interchange following the connection of the two continents. Their unspecialized biology, flexible diet, and reproductive habits make them successful colonizers and survivors in diverse locations and conditions.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Opossum",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Opossum_2.jpg/220px-Opossum_2.jpg"
        },
        {
        name: "Oryx",
        desc: "Oryx is a genus consisting of four large antelope species called oryxes. Three of them are native to arid parts of Africa, and the fourth to the Arabian Peninsula. Their fur is pale with contrasting dark markings in the face and on the legs, and their long horns are almost straight. The exception is the scimitar oryx, which lacks dark markings on the legs, only has faint dark markings on the head, has an ochre neck, and horns that are clearly decurved.",
        url: "https://en.wikipedia.org/wiki/Oryx",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Oryx_gazella_male_8054.jpg/220px-Oryx_gazella_male_8054.jpg"
        },
        {
        name: "Ostrich",
        desc: "The ostriches are a family, Struthionidae, of flightless birds. The two extant species of ostrich are the common ostrich and Somali ostrich, both in the genus Struthio, which also contains several species known from Holocene fossils such as the Asian ostrich. The common ostrich is the more widespread of the two living species, and is the largest living bird species. Other ostriches are also among the largest bird species ever.",
        url: "https://en.wikipedia.org/wiki/Ostrich",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Ostriches_cape_point_cropped.jpg/220px-Ostriches_cape_point_cropped.jpg"
        },
        {
        name: "Otter",
        desc: "Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic or marine, with diets based on fish and invertebrates. Lutrinae is a branch of the weasel family Mustelidae, which also includes badgers, honey badgers, martens, minks, polecats, and wolverines.",
        url: "https://en.wikipedia.org/wiki/Otter",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fischotter%2C_Lutra_Lutra.JPG/220px-Fischotter%2C_Lutra_Lutra.JPG"
        },
        {
        name: "Owl",
        desc: "Owls are birds from the order Strigiformes, which includes about 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight. Exceptions include the diurnal northern hawk-owl and the gregarious burrowing owl.",
        url: "https://en.wikipedia.org/wiki/Owl",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg/220px-Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg"
        },
        {
        name: "Oyster",
        desc: "Oyster is the common name for a number of different families of salt-water bivalve molluscs that live in marine or brackish habitats. In some species the valves are highly calcified, and many are somewhat irregular in shape. Many, but not all, oysters are in the superfamily Ostreoidea.",
        url: "https://en.wikipedia.org/wiki/Oyster",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Crassostrea_gigas_p1040848.jpg/220px-Crassostrea_gigas_p1040848.jpg"
        },
        {
        name: "Panther",
        desc: "A black panther is the melanistic colour variant of any Panthera species. Black panthers in Asia and Africa are leopards (P. pardus), and those in the Americas are jaguars (P. onca).&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Black_panther",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jaguar.jpg/200px-Jaguar.jpg"
        },
        {
        name: "Parrot",
        desc: "Parrots, also known as psittacines /'s?t?sa?nz/,&#91;1&#93;&#91;2&#93; are birds of the roughly 393 species in 92 genera that make up the order Psittaciformes, found in most tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea ('true' parrots), the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). Parrots have a generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. The greatest diversity of parrots is in South America and Australasia.",
        url: "https://en.wikipedia.org/wiki/Parrot",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Parrot_montage.jpg/300px-Parrot_montage.jpg"
        },
        {
        name: "Partridge",
        desc: "Partridges are medium-sized non-migratory birds, with a wide native distribution throughout the Old World, including Europe, Asia, and parts of Africa. They are sometimes grouped in the Perdicinae subfamily of the Phasianidae (pheasants, quail, etc.). However, molecular research suggests that partridges are not a distinct taxon within the family Phasianidae, but that some species are closer to the pheasants, while others are closer to the junglefowl.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Partridge",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/CRESTED_WOOD-PARTRIDGE_%287181284331%29.jpg/220px-CRESTED_WOOD-PARTRIDGE_%287181284331%29.jpg"
        },
        {
        name: "Peafowl",
        desc: "Peafowl is a common name for three species of birds in the genera Pavo and Afropavo of the Phasianidae family, the pheasants and their allies. Male peafowl are referred to as peacocks, and female peafowl as peahens.&#91;1&#93; The two Asiatic species are the blue or Indian peafowl originally of the Indian subcontinent, and the green peafowl of Southeast Asia; the one African species is the Congo peafowl, native only to the Congo Basin. Male peafowl are known for their piercing calls and their extravagant plumage. The latter is especially prominent in the Asiatic species, which have an eye-spotted 'tail' or 'train' of covert feathers, which they display as part of a courtship ritual.",
        url: "https://en.wikipedia.org/wiki/Peafowl",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Peacock_Plumage.jpg/260px-Peacock_Plumage.jpg"
        },
        {
        name: "Pelican",
        desc: "Pelicans are a genus of large water birds that make up the family Pelecanidae. They are characterised by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing. They have predominantly pale plumage, the exceptions being the brown and Peruvian pelicans. The bills, pouches, and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America and from polar regions and the open ocean.",
        url: "https://en.wikipedia.org/wiki/Pelican",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/220px-Pelikan_Walvis_Bay.jpg"
        },
        {
        name: "Penguin",
        desc: "Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic flightless birds.  They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin, found north of the equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage, and their wings have evolved into flippers. Most penguins feed on krill, fish, squid and other forms of sea life which they catch while swimming underwater. They spend roughly half of their lives on land and the other half in the sea.",
        url: "https://en.wikipedia.org/wiki/Penguin",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/220px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg"
        },
        {
        name: "Pheasant",
        desc: "Pheasants (/'f?z?nt/) are birds of several genera within the subfamily Phasianinae, of the family Phasianidae in the order Galliformes. Though they can be found world over in introduced (and captive) populations, the pheasant genera native range is restricted to Asia.",
        url: "https://en.wikipedia.org/wiki/Pheasant",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pheasant.jpg/220px-Pheasant.jpg"
        },
        {
        name: "Pig",
        desc: "The domestic pig (Sus scrofa domesticus or only Sus domesticus), often called swine, hog, or simply pig when there is no need to distinguish it from other pigs, is a domesticated large, even-toed ungulate. It is variously considered a subspecies of the Eurasian boar or a distinct species. The domestic pig's head-plus-body-length ranges from 0.9 to 1.8&#160;m (35 to 71&#160;in), and adult pigs typically weigh between 50 and 350&#160;kg (110 and 770&#160;lb), with well-fed individuals often exceeding this weight range. The size and weight of a hog largely depends on its breed. Compared to other artiodactyls, its head is relatively long, pointed, and free of warts. Even-toed ungulates are generally herbivorous, but the domestic pig is an omnivore, like its wild relative.",
        url: "https://en.wikipedia.org/wiki/Domestic_pig",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sow_with_piglet.jpg/220px-Sow_with_piglet.jpg"
        },
        {
        name: "Pigeon",
        desc: "Pigeons and doves constitute the animal family Columbidae and the order Columbiformes, which includes about 42 genera and 310 species. They are stout-bodied birds with short necks, and short slender bills that in some species feature fleshy ceres. They primarily feed on seeds, fruits, and plants. Pigeons and doves are likely the most common birds in the world; the family occurs worldwide, but the greatest variety is in the Indomalaya and Australasia ecozones.",
        url: "https://en.wikipedia.org/wiki/Pigeon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/220px-Treron_vernans_male_-_Kent_Ridge_Park.jpg"
        },
        {
        name: "Pika",
        desc: "A pika (/'pa?k?/ PY-k?; archaically spelled pica) is a small mountain-dwelling mammal found in Asia and North America.  With short limbs, very round body, and even coat of fur, and no external tail, they resemble their close cousin the rabbit, but with short rounded ears.&#91;3&#93; The large-eared pika of the Himalayas and nearby mountains is found at heights of more than 6,000 metres (20,000&#160;ft), among the highest of any mammal.",
        url: "https://en.wikipedia.org/wiki/Pika",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg/220px-American_pika_%28ochotona_princeps%29_with_a_mouthful_of_flowers.jpg"
        },
        {
        name: "Polar bear",
        desc: "The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is a large bear, approximately the same size as the omnivorous Kodiak bear (Ursus arctos middendorffi).&#91;5&#93; A boar (adult male) weighs around 350-700&#160;kg (772-1,543&#160;lb),&#91;6&#93; while a sow (adult female) is about half that size. Polar bears are the largest land carnivores currently in existence, rivaled only by the Kodiak bear.&#91;7&#93; Although it is the sister species of the brown bear,&#91;8&#93; it has evolved to occupy a narrower ecological niche, with many body characteristics adapted for cold temperatures, for moving across snow, ice and open water, and for hunting seals, which make up most of its diet.&#91;9&#93; Although most polar bears are born on land, they spend most of their time on the sea ice. Their scientific name means 'maritime bear' and derives from this fact. Polar bears hunt their preferred food of seals from the edge of sea ice, often living off fat reserves when no sea ice is present. Because of their dependence on the sea ice, polar bears are classified as marine mammals.&#91;10&#93;",
        url: "https://en.wikipedia.org/wiki/Polar_bear",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/220px-Polar_Bear_-_Alaska_%28cropped%29.jpg"
        },
        {
        name: "Pony",
        desc: "A pony is a small horse (Equus ferus caballus). Depending on context, a pony may be a horse that is under an approximate or exact height at the withers or a small horse with a specific conformation and temperament. There are many different breeds. Compared to other horses, ponies often exhibit thicker manes, tails and overall coat, as well as proportionally shorter legs, wider barrels, heavier bone, thicker necks, and shorter heads with broader foreheads. The word pony derives from the old French poulenet, meaning foal, a young, immature horse, but this is not the modern meaning; unlike a horse foal, a pony remains small when fully grown.  On occasion, people who are unfamiliar with horses may confuse an adult pony with a foal.",
        url: "https://en.wikipedia.org/wiki/Pony",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gracie-rhs2005.jpg/220px-Gracie-rhs2005.jpg"
        },
        {
        name: "Porcupine",
        desc: "Porcupines are large rodents with a coat of sharp spines, or quills, that protect against predators. The term covers two families of animals, the Old World porcupines of family Hystricidae, and the New World porcupines of family Erethizontidae. Both families belong to the infraorder Hystricognathi within the profoundly diverse order Rodentia and display superficially similar coats of quills: despite this, the two groups are distinct from each other and are not closely related to each other within the Hystricognathi.",
        url: "https://en.wikipedia.org/wiki/Porcupine",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PorcupineCabelasSpringfield0511.jpg/220px-PorcupineCabelasSpringfield0511.jpg"
        },
        {
        name: "Porpoise",
        desc: "Porpoises are a group of fully aquatic marine mammals, all of which are classified under the family Phocoenidae, parvorder Odontoceti (toothed whales). There are seven extant species of porpoise. They are small toothed whales that are very closely related to oceanic dolphins. The most obvious visible difference between the two groups is that porpoises have shorter beaks and flattened, spade-shaped teeth distinct from the conical teeth of dolphins. Porpoises, and other cetaceans, belong to the clade Cetartiodactyla with even-toed ungulates, and their closest living relatives are the hippopotamuses, having diverged from them about 40 million years ago.",
        url: "https://en.wikipedia.org/wiki/Porpoise",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Phocoena_phocoena.2.jpg/220px-Phocoena_phocoena.2.jpg"
        },
        {
        name: "Prairie dog",
        desc: "Prairie dogs (genus Cynomys) are  herbivorous burrowing rodents native to the grasslands of North America. The five species are: black-tailed, white-tailed, Gunnison's, Utah, and Mexican prairie dogs&#91;1&#93;. They are a type of ground squirrel, found in the United States, Canadian Prairies and Mexico. In Mexico, prairie dogs are found primarily in the northern states, which lie at the southern end of the Great Plains: northeastern Sonora, north and northeastern Chihuahua, northern Coahuila, northern Nuevo León, and northern Tamaulipas. In the United States, they range primarily to the west of the Mississippi River, though they have also been introduced in a few eastern locales. Despite the name, they are not actually canines.",
        url: "https://en.wikipedia.org/wiki/Prairie_dog",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Black-Tailed_Prairie_Dog.jpg/220px-Black-Tailed_Prairie_Dog.jpg"
        },
        {
        name: "Pug",
        desc: "The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.",
        url: "https://en.wikipedia.org/wiki/Pug",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/220px-Pug_-_1_year_Old.jpg"
        },
        {
        name: "Quail",
        desc: "Quail is a collective name for several genera of mid-sized birds generally placed in the order Galliformes.",
        url: "https://en.wikipedia.org/wiki/Quail",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Brown_Quail.jpg/220px-Brown_Quail.jpg"
        },
        {
        name: "Quelea",
        desc: "Quelea /'kwi?li?/ is a genus of small passerine birds that belongs to the weaver family Ploceidae, confined to Africa. These are small-sized, sparrow- or finch-like gregarious birds, with bills adapted to eating seeds. Queleas may be nomadic over vast ranges; the red-billed quelea is said to be the most numerous bird species in the world.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Quelea",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/95/Red-billed_quelea_flocking_at_waterhole.jpg/220px-Red-billed_quelea_flocking_at_waterhole.jpg"
        },
        {
        name: "Quetzal",
        desc: "Quetzals (/k?t's??l, 'k?ts?l/) are strikingly colored birds in the trogon family.",
        url: "https://en.wikipedia.org/wiki/Quetzal",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Golden-headed_Quetzal.jpg/220px-Golden-headed_Quetzal.jpg"
        },
        {
        name: "Rabbit",
        desc: "Rabbits are small mammals in the family Leporidae of the order Lagomorpha (along with the hare and the pika).  Oryctolagus cuniculus includes the European rabbit species and its descendants, the world's 305 breeds&#91;1&#93; of domestic rabbit. Sylvilagus includes 13 wild rabbit species, among them the 7 types of cottontail. The European rabbit, which has been introduced on every continent except Antarctica, is familiar throughout the world as a wild prey animal and as a domesticated form of livestock and pet. With its widespread effect on ecologies and cultures, the rabbit (or bunny) is, in many areas of the world, a part of daily life&#8212;as food, clothing, a companion, and as a source of artistic inspiration.",
        url: "https://en.wikipedia.org/wiki/Rabbit",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/250px-Oryctolagus_cuniculus_Rcdo.jpg"
        },
        {
        name: "Raccoon",
        desc: "The raccoon  (/r?'ku?n/ or US: /ræ'ku?n/&#32;(listen), Procyon lotor), sometimes spelled racoon,&#91;3&#93; also known as the common raccoon,&#91;4&#93; North American raccoon,&#91;5&#93;, northern raccoon,&#91;6&#93; or coon, is a medium-sized mammal native to North America. The raccoon is the largest of the procyonid family, having a body length of 40 to 70&#160;cm (16 to 28&#160;in) and a body weight of 5 to 26&#160;kg (11 to 57&#160;lb).&#91;7&#93; Its grayish coat mostly consists of dense underfur which insulates it against cold weather. Three of the raccoon's most distinctive features are its extremely dexterous front paws, its facial mask, and its ringed tail, which are themes in the mythologies of the indigenous peoples of the Americas. Raccoons are noted for their intelligence, with studies showing that they are able to remember the solution to tasks for at least three years.&#91;8&#93; They are usually nocturnal and omnivorous, eating about 40% invertebrates, 33% plants, and 27% vertebrates.",
        url: "https://en.wikipedia.org/wiki/Raccoon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Raccoon_climbing_in_tree_-_Cropped_and_color_corrected.jpg/220px-Raccoon_climbing_in_tree_-_Cropped_and_color_corrected.jpg"
        },
        {
        name: "Ram",
        desc: "Domestic sheep (Ovis aries) are quadrupedal, ruminant mammals typically kept as livestock. Like most ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates. Although the name sheep applies to many species in the genus Ovis, in everyday usage it almost always refers to Ovis aries. Numbering a little over one billion, domestic sheep are also the most numerous species of sheep. An adult female sheep is referred to as a ewe (/ju?/), an intact male as a ram or occasionally a tup, a castrated male as a wether, and a younger sheep as a  lamb.",
        url: "https://en.wikipedia.org/wiki/Sheep",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/240px-Flock_of_sheep.jpg"
        },
        {
        name: "Rat",
        desc: "Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus. Other rat genera include Neotoma (pack rats), Bandicota (bandicoot rats) and Dipodomys (kangaroo rats).",
        url: "https://en.wikipedia.org/wiki/Rat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rattus_norvegicus_1.jpg/220px-Rattus_norvegicus_1.jpg"
        },
        {
        name: "Raven",
        desc: "A raven is one of several larger-bodied species of the genus Corvus. These species do not form a single taxonomic group within the genus.",
        url: "https://en.wikipedia.org/wiki/Raven",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Head_of_Raven.jpg/220px-Head_of_Raven.jpg"
        },
        {
        name: "Red deer",
        desc: "The red deer (Cervus elaphus) is one of the largest deer species. The red deer inhabits most of Europe, the Caucasus Mountains region, Asia Minor, Iran, parts of western Asia, and central Asia. It also inhabits the Atlas Mountains region between Morocco and Tunisia in northwestern Africa, being the only species of deer to inhabit Africa. Red deer have been introduced to other areas, including Australia, New Zealand, United States, Canada, Peru, Uruguay, Chile and Argentina.&#91;3&#93;&#91;4&#93; In many parts of the world, the meat (venison) from red deer is used as a food source.",
        url: "https://en.wikipedia.org/wiki/Red_deer",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cervus_elaphus_Luc_Viatour_6.jpg/220px-Cervus_elaphus_Luc_Viatour_6.jpg"
        },
        {
        name: "Red panda",
        desc: "The red panda (Ailurus fulgens) is a mammal native to the eastern Himalayas and southwestern China. It is listed as Endangered on the IUCN Red List because the wild population is estimated at fewer than 10,000 mature individuals and continues to decline due to habitat loss and fragmentation, poaching, and inbreeding depression.&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Red_panda",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/50/RedPandaFullBody.JPG/220px-RedPandaFullBody.JPG"
        },
        {
        name: "Rhea",
        desc: "The rheas (/'ri??/) are large ratites (flightless birds without a keel on their sternum bone) in the order Rheiformes, native to South America, distantly related to the ostrich and emu. Most taxonomic authorities recognize two extant species: the greater or American rhea (Rhea americana) and the lesser or Darwin's rhea (Rhea pennata). The IUCN lists the puna rhea (Rhea tarapacensis) as a separate species. The IUCN currently rates the greater and puna rheas as near-threatened in their native ranges, while Darwin's rhea is of least concern. In addition, a feral population of the greater rhea in Germany appears to be growing.",
        url: "https://en.wikipedia.org/wiki/Rhea_(bird)",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Greater_rhea_pair_arp.jpg/220px-Greater_rhea_pair_arp.jpg"
        },
        {
        name: "Rhinoceros",
        desc: "A rhinoceros (/ra?'n?s?r?s/, from&#32;Greek&#32; rhinokeros, meaning 'nose-horned', from&#32; rhis, meaning 'nose',&#32;and&#32; keras, meaning 'horn'), commonly abbreviated to rhino, is one of any five extant species of odd-toed ungulates in the family Rhinocerotidae, as well as any of the numerous extinct species therein. Two of the extant species are native to Africa and three to Southern Asia. The term 'rhinoceros' is often more broadly applied to now extinct species of the superfamily Rhinocerotoidea.",
        url: "https://en.wikipedia.org/wiki/Rhinoceros",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Diceros_bicornis.jpg/220px-Diceros_bicornis.jpg"
        },
        {
        name: "Rook",
        desc: "The rook (Corvus frugilegus) is a member of the crow family in the passerine order of birds. It is found in Eurasia, its range extending from Scandinavia and western Europe to eastern Siberia. It is a large, gregarious, black bird, distinguished from similar species by the whitish featherless area on the face. Rooks nest collectively in the tops of tall trees, often close to farms or villages, the groups of nests being known as rookeries.",
        url: "https://en.wikipedia.org/wiki/Rook_(bird)",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Rook_at_Slimbridge_Wetland_Centre%2C_Gloucestershire%2C_England_22May2019_arp.jpg/220px-Rook_at_Slimbridge_Wetland_Centre%2C_Gloucestershire%2C_England_22May2019_arp.jpg"
        },
        {
        name: "Salamander",
        desc: "Salamanders are a group of amphibians typically characterized by a lizard-like appearance, with slender bodies, blunt snouts, short limbs projecting at right angles to the body, and the presence of a tail in both larvae and adults. All present-day salamander families are grouped together under the order Urodela. Salamander diversity is most abundant in the Northern Hemisphere and most species are found in the Holarctic ecozone, with some species present in the Neotropical zone.",
        url: "https://en.wikipedia.org/wiki/Salamander",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SpottedSalamander.jpg/220px-SpottedSalamander.jpg"
        },
        {
        name: "Salmon",
        desc: "Salmon /'sæm?n/ is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean  (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.",
        url: "https://en.wikipedia.org/wiki/Salmon",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salmo_salar.jpg/220px-Salmo_salar.jpg"
        },
        {
        name: "Sand dollar",
        desc: "The term sand dollar (also known as a sea cookie or snapper biscuit in New Zealand, or pansy shell in South Africa) refers to species of extremely flattened, burrowing sea urchins belonging to the order Clypeasteroida. Some species within the order, not quite as flat, are known as sea biscuits. (Related animals include other sea urchins, sea cucumbers, and starfish.)",
        url: "https://en.wikipedia.org/wiki/Sand_dollar",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Clypeaster_reticulatus.jpg/220px-Clypeaster_reticulatus.jpg"
        },
        {
        name: "Sandpiper",
        desc: "Sandpipers are a large family, Scolopacidae, of waders or shorebirds. They include many species called sandpipers, as well as those called by names such as curlew and snipe. The majority of these species eat small invertebrates picked out of the mud or soil. Different lengths of bills enable different species to feed in the same habitat, particularly on the coast, without direct competition for food.",
        url: "https://en.wikipedia.org/wiki/Sandpiper",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/62/Calidris-alpina-001_edit.jpg/220px-Calidris-alpina-001_edit.jpg"
        },
        {
        name: "Sardine",
        desc: "'Sardine' and 'pilchard' are common names used to refer to various small, oily fish in the herring family Clupeidae.&#91;2&#93; The term 'sardine' was first used in English during the early 15th century and may come from the Mediterranean island of Sardinia, around which sardines were once abundant.&#91;3&#93;&#91;4&#93;",
        url: "https://en.wikipedia.org/wiki/Sardine",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Sardines_-_%E9%B0%AF%28%E3%81%84%E3%82%8F%E3%81%97%29.jpg/300px-Sardines_-_%E9%B0%AF%28%E3%81%84%E3%82%8F%E3%81%97%29.jpg"
        },
        {
        name: "Sea lion",
        desc: "Sea lions are pinnipeds characterized by external ear flaps, long foreflippers, the ability to walk on all fours, short, thick hair, and a big chest and belly. Together with the fur seals, they comprise the family Otariidae, eared seals, which contains six extant and one extinct species (the Japanese sea lion) in five genera. Their range extends from the subarctic to tropical waters of the global ocean in both the Northern and Southern Hemispheres, with the notable exception of the northern Atlantic Ocean.&#91;1&#93; They have an average lifespan of 20-30 years. A male California sea lion weighs on average about 300&#160;kg (660&#160;lb) and is about 2.4&#160;m (8&#160;ft) long, while the female sea lion weighs 100&#160;kg (220&#160;lb) and is 1.8&#160;m (6&#160;ft) long. The largest sea lion is Steller's sea lion, which can weigh 1,000&#160;kg (2,200&#160;lb) and grow to a length of 3.0&#160;m (10&#160;ft). Sea lions consume large quantities of food at a time and are known to eat about 5-8% of their body weight (about 6.8-15.9&#160;kg (15-35&#160;lb)) at a single feeding. Sea lions can move around 16 knots (30&#160;km/h; 18&#160;mph) in water and at their fastest they can reach a speed of about 30 knots (56&#160;km/h; 35&#160;mph).&#91;2&#93; Three species, the Australian sea lion, the Galápagos sea lion and the New Zealand sea lion are listed as Endangered.&#91;citation needed&#93;",
        url: "https://en.wikipedia.org/wiki/Sea_lion",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/74/California_sea_lion_in_La_Jolla_%2870568%29.jpg/220px-California_sea_lion_in_La_Jolla_%2870568%29.jpg"
        },
        {
        name: "Seahorse",
        desc: "Seahorse (also written sea-horse and sea horse) is the name given to 45 species of small marine fish in the genus Hippocampus. 'Hippocampus' comes from the Ancient Greek hippokampos (?ππ??αµπ?? hippókampos), itself from  hippos (?ππ?? híppos) meaning 'horse' and kampos (??µπ?? kámpos) meaning 'sea monster'.&#91;3&#93;&#91;4&#93; Having a head and neck suggestive of a horse, seahorses also feature segmented bony armour, an upright posture and a curled prehensile tail.&#91;5&#93;",
        url: "https://en.wikipedia.org/wiki/Seahorse",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hippocampus.jpg/220px-Hippocampus.jpg"
        },
        {
        name: "Seal",
        desc: "Pinnipeds,&#91;a&#93; commonly known as seals,&#91;b&#93; are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals). There are 33 extant species of pinnipeds, and more than 50&#160;extinct species have been described from fossils. While seals were historically thought to have descended from two ancestral lines, molecular evidence supports them as a monophyletic lineage (descended from one ancestral line). Pinnipeds belong to the order Carnivora and their closest living relatives are believed to be bears and the superfamily of musteloids (weasels, raccoons, skunks, and red pandas), having diverged about 50 million years ago.",
        url: "https://en.wikipedia.org/wiki/Pinniped",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pinniped_collage.jpg/260px-Pinniped_collage.jpg"
        },
        {
        name: "Shark",
        desc: "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the rays. However, the term 'shark' has also been used for extinct members of the subclass Elasmobranchii outside the Selachimorpha, such as Cladoselache and Xenacanthus, as well as other Chondrichthyes such as the holocephalid eugenedontidans.",
        url: "https://en.wikipedia.org/wiki/Shark",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/24/TDpGUipa.jpg/220px-TDpGUipa.jpg"
        },
        {
        name: "Sheep",
        desc: "Domestic sheep (Ovis aries) are quadrupedal, ruminant mammals typically kept as livestock. Like most ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates. Although the name sheep applies to many species in the genus Ovis, in everyday usage it almost always refers to Ovis aries. Numbering a little over one billion, domestic sheep are also the most numerous species of sheep. An adult female sheep is referred to as a ewe (/ju?/), an intact male as a ram or occasionally a tup, a castrated male as a wether, and a younger sheep as a  lamb.",
        url: "https://en.wikipedia.org/wiki/Sheep",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/240px-Flock_of_sheep.jpg"
        },
        {
        name: "Shrew",
        desc: "The shrew (family Soricidae) is a small mole-like mammal classified in the order Eulipotyphla. True shrews are not to be confused with treeshrews, otter shrews, elephant shrews, or the West Indies shrews, which belong to different families or orders.",
        url: "https://en.wikipedia.org/wiki/Shrew",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Southern_short-tailed_shrew.jpg/220px-Southern_short-tailed_shrew.jpg"
        },
        {
        name: "Siamang",
        desc: "The siamang (Symphalangus syndactylus) is an arboreal black-furred gibbon native to the forests of Indonesia, Malaysia and Thailand. The largest of the gibbons, the siamang can be twice the size of other gibbons, reaching 1 m in height, and weighing up to 14&#160;kg. The siamang is the only species in the genus Symphalangus.",
        url: "https://en.wikipedia.org/wiki/Siamang",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Distribuci%C3%B3n_symphalangus.png/220px-Distribuci%C3%B3n_symphalangus.png"
        },
        {
        name: "Skunk",
        desc: "Skunks are North and South American mammals in the family Mephitidae. While related to polecats and other members of the weasel family, skunks have as their closest Old World relatives the stink badgers.&#91;1&#93; The animals are known for their ability to spray a liquid with a strong, unpleasant smell.&#91;2&#93;&#91;3&#93;&#91;4&#93; Different species of skunk vary in appearance from black-and-white to brown, cream or ginger colored, but all have warning coloration.",
        url: "https://en.wikipedia.org/wiki/Skunk",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/57/Striped_Skunk.jpg/220px-Striped_Skunk.jpg"
        },
        {
        name: "Sloth",
        desc: "Sloths are arboreal mammals noted for slowness of movement and for spending most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. The six species are in two families: two-toed sloths and three-toed sloths. In spite of this traditional naming, all sloths actually have three toes. The two-toed sloths have two digits, or fingers, on each forelimb.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Sloth",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/220px-Bradypus.jpg"
        },
        {
        name: "Snail",
        desc: "A snail is, in loose terms, a shelled gastropod. The name is most often applied to land snails, terrestrial pulmonate gastropod molluscs. However, the common name snail is also used for most of the members of the molluscan class Gastropoda that have a coiled shell that is large enough for the animal to retract completely into. When the word 'snail' is used in this most general sense, it includes not just land snails but also numerous species of sea snails and freshwater snails. Gastropods that naturally lack a shell, or have only an internal shell, are mostly called slugs, and land snails that have only a very small shell (that they cannot retract into) are often called semi-slugs.",
        url: "https://en.wikipedia.org/wiki/Snail",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/69/Grapevinesnail_01.jpg/220px-Grapevinesnail_01.jpg"
        },
        {
        name: "Snake",
        desc: "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes.&#91;2&#93; Like all other squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca. Lizards have evolved elongate bodies without limbs or with greatly reduced limbs about twenty-five times independently via convergent evolution, leading to many lineages of legless lizards.&#91;3&#93;  Legless lizards resemble snakes, but several common groups of legless lizards have eyelids and external ears, which snakes lack, although this rule is not universal (see Amphisbaenia, Dibamidae, and Pygopodidae).",
        url: "https://en.wikipedia.org/wiki/Snake",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Snakes_Diversity.jpg/250px-Snakes_Diversity.jpg"
        },
        {
        name: "Spider",
        desc: "Spiders (order Araneae) are air-breathing arthropods that have eight legs and chelicerae with fangs able to inject venom. They are the largest order of arachnids and rank seventh in total species diversity among all orders of organisms.&#91;2&#93; Spiders are found worldwide on every continent except for Antarctica, and have become established in nearly every habitat with the exceptions of air and sea colonization. As of July&#160;2019&#91;update&#93;, at least 48,200 spider species, and 120 families have been recorded by taxonomists.&#91;1&#93; However, there has been dissension within the scientific community as to how all these families should be classified, as evidenced by the over 20 different classifications that have been proposed since 1900.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Spider",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Spiders_Diversity.jpg/250px-Spiders_Diversity.jpg"
        },
        {
        name: "Squid",
        desc: "Squid are cephalopods in the superorder Decapodiformes with elongated bodies, large eyes, eight arms and two tentacles. Like all other cephalopods, squid have a distinct head, bilateral symmetry, and a mantle. They are mainly soft-bodied, like octopuses, but have a small internal skeleton in the form of a rod-like gladius or pen, made of chitin.",
        url: "https://en.wikipedia.org/wiki/Squid",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sepioteuthis_sepioidea_%28Caribbean_Reef_Squid%29.jpg/220px-Sepioteuthis_sepioidea_%28Caribbean_Reef_Squid%29.jpg"
        },
        {
        name: "Squirrel",
        desc: "Squirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. The squirrel family includes tree squirrels, ground squirrels, chipmunks, marmots (including woodchucks), flying squirrels, and prairie dogs amongst other rodents.  Squirrels are indigenous to the Americas, Eurasia, and Africa, and were introduced by humans to Australia.&#91;1&#93;  The earliest known fossilized squirrels date from the Eocene period and are most closely related to the mountain beaver and to the dormouse among other living rodent families.",
        url: "https://en.wikipedia.org/wiki/Squirrel",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sciuridae.jpg/250px-Sciuridae.jpg"
        },
        {
        name: "Starling",
        desc: "Starlings are small to medium-sized passerine birds in the family Sturnidae. The name 'Sturnidae' comes from the Latin word for starling, sturnus. Many Asian species, particularly the larger ones, are called mynas, and many African species are known as glossy starlings because of their iridescent plumage. Starlings are native to Europe, Asia and Africa, as well as northern Australia and the islands of the tropical Pacific. Several European and Asian species have been introduced to these areas as well as North America, Hawaii and New Zealand, where they generally compete for habitats with native birds and are considered to be invasive species. The starling species familiar to most people in Europe and North America is the common starling, and throughout much of Asia and the Pacific, the common myna is indeed common.",
        url: "https://en.wikipedia.org/wiki/Starling",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lamprotornis_hildebrandti_-Tanzania-8-2c.jpg/220px-Lamprotornis_hildebrandti_-Tanzania-8-2c.jpg"
        },
        {
        name: "Stegosaurus",
        desc: "Stegosaurus (/?st?g?'s??r?s/&#91;1&#93;), from Greek stegos (στ????) which means roof and sauros (σα????) which means lizard (Greek: Στε??σα????), is a genus of herbivorous thyreophoran dinosaur. Fossils of this genus date to the Late Jurassic period, where they are found in Kimmeridgian to early Tithonian aged strata, between 155 and 150&#160;million years ago, in the western United States and Portugal. Of the species that have been classified in the upper Morrison Formation of the western US, only three are universally recognized; S. stenops, S. ungulatus and S. sulcatus. The remains of over 80 individual animals of this genus have been found. Stegosaurus would have lived alongside dinosaurs such as Apatosaurus, Diplodocus, Brachiosaurus, Allosaurus, and Ceratosaurus; the latter two may have been predators of it.",
        url: "https://en.wikipedia.org/wiki/Stegosaurus",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Journal.pone.0138352.g001A.jpg/220px-Journal.pone.0138352.g001A.jpg"
        },
        {
        name: "Swan",
        desc: "Swans are birds of the family Anatidae within the genus Cygnus.&#91;3&#93; The swans' closest relatives include the geese and ducks. Swans are grouped with the closely related geese in the subfamily Anserinae where they form the tribe Cygnini. Sometimes, they are considered a distinct subfamily, Cygninae. There are six or seven living (and one extinct) species of swan in the genus Cygnus; in addition, there is another species known as the coscoroba swan, although this species is no longer considered one of the true swans. Swans usually mate for life, although \"divorce\" sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another. The number of eggs in each clutch ranges from three to eight.&#91;4&#93;",
        url: "https://en.wikipedia.org/wiki/Swan",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cygnus_olor_2_%28Marek_Szczepanek%29.jpg/220px-Cygnus_olor_2_%28Marek_Szczepanek%29.jpg"
        },
        {
        name: "Tamarin",
        desc: "The tamarins are squirrel-sized New World monkeys from the family Callitrichidae in the genus Saguinus.  They are the first offshoot in the Callitrichidae tree, and therefore are sister group of a clade formed by the lion tamarins, Goeldi's monkeys and marmosets.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Tamarin",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tamarin_portrait_2_edit3.jpg/220px-Tamarin_portrait_2_edit3.jpg"
        },
        {
        name: "Tapir",
        desc: "A tapir (/'te?p?r/ TAY-p?r, /'te?p??r/ TAY-peer or /t?'p??r/ t?-PEER, /'te?pi??r/ TAY-pee-?r)&#91;citation needed&#93; is a large, herbivorous mammal, similar in shape to a pig, with a short, prehensile nose trunk. Tapirs inhabit jungle and forest regions of South America, Central America, and Southeast Asia. The five extant species of tapirs, all of the family Tapiridae and the genus Tapirus, are the Brazilian tapir, the Malayan tapir, the Baird's tapir, the kabomani tapir and the mountain tapir. The four species that have been evaluated (all except the kabomani) are all classified on the IUCN Red List as Endangered or Vulnerable. The tapirs have a number of extinct relatives in the superfamily Tapiroidea. The closest extant relatives of the tapirs are the other odd-toed ungulates, which include horses, donkeys, zebras and rhinoceroses.",
        url: "https://en.wikipedia.org/wiki/Tapir",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/36/South_American_tapir_%28Tapirus_terrestris%29.JPG/220px-South_American_tapir_%28Tapirus_terrestris%29.JPG"
        },
        {
        name: "Tarsier",
        desc: "Tarsiers are any haplorrhine primates of the family Tarsiidae, which is itself the lone extant family within the infraorder Tarsiiformes. Although the group was once more widespread, all of its species living today are found in the islands of Southeast Asia.",
        url: "https://en.wikipedia.org/wiki/Tarsier",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tarsier-GG.jpg/220px-Tarsier-GG.jpg"
        },
        {
        name: "Termite",
        desc: "Termites are eusocial insects that are classified at the taxonomic rank of infraorder Isoptera, or as epifamily Termitoidae within the cockroach order Blattodea. Termites were once classified in a separate order from cockroaches, but recent phylogenetic studies indicate that they evolved from close ancestors of cockroaches during the Jurassic or Triassic. However, the first termites possibly emerged during the Permian or even the Carboniferous. About 3,106 species are currently described, with a few hundred more left to be described. Although these insects are often called 'white ants', they are not ants.",
        url: "https://en.wikipedia.org/wiki/Termite",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Coptotermes_formosanus_shiraki_USGov_k8204-7.jpg/220px-Coptotermes_formosanus_shiraki_USGov_k8204-7.jpg"
        },
        {
        name: "Tiger",
        desc: "The tiger (Panthera tigris) is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on reddish-orange fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, before they become independent and leave their mother's home range to establish their own.",
        url: "https://en.wikipedia.org/wiki/Tiger",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Panthera_tigris_tigris_Tidoba_20150306.jpg/220px-Panthera_tigris_tigris_Tidoba_20150306.jpg"
        },
        {
        name: "Toad",
        desc: "Toad is a common name for certain frogs, especially of the family Bufonidae, that are characterized by dry, leathery skin, short legs, and large bumps covering the parotoid glands.&#91;1&#93;&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Toad",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bombina_bombina_1_%28Marek_Szczepanek%29.jpg/220px-Bombina_bombina_1_%28Marek_Szczepanek%29.jpg"
        },
        {
        name: "Toucan",
        desc: "Toucans (/'tu?kæn/, UK: /-k?n/) are members of the Neotropical near passerine bird family Ramphastidae. The Ramphastidae are most closely related to the American barbets. They are brightly marked and have large, often-colorful bills. The family includes five genera and over forty different species.",
        url: "https://en.wikipedia.org/wiki/Toucan",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/The_American_Museum_journal_%28c1900-%281918%29%29_%2818162951191%29.jpg/220px-The_American_Museum_journal_%28c1900-%281918%29%29_%2818162951191%29.jpg"
        },
        {
        name: "Turaco",
        desc: "The turacos make up the bird family Musophagidae (literally 'banana-eaters'), which includes plantain-eaters and go-away-birds. In southern Africa both turacos and go-away-birds are commonly known as loeries. They are semi-zygodactylous - the fourth (outer) toe can be switched back and forth. The second and third toes, which always point forward, are conjoined in some species. Musophagids often have prominent crests and long tails; the turacos are noted for peculiar and unique pigments giving them their bright green and red feathers.",
        url: "https://en.wikipedia.org/wiki/Turaco",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg/220px-Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg"
        },
        {
        name: "Turkey",
        desc: "The domestic turkey (Meleagris gallopavo) is a large fowl, one of the two species in the genus Meleagris and the same as the wild turkey. Although turkey domestication was thought to have occurred in central Mesoamerica at least 2,000 years ago,&#91;1&#93; recent research suggests a possible second domestication event in the Southwestern United States between 200 BC and AD 500.  However, all of the main domestic turkey varieties today descend from the turkey raised in central Mexico that was subsequently imported into Europe by the Spanish in the 16th century.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Domesticated_turkey",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Male_north_american_turkey_supersaturated.jpg/220px-Male_north_american_turkey_supersaturated.jpg"
        },
        {
        name: "Turtle",
        desc: "Turtles are diapsids of the order Testudines (or Chelonii&#91;3&#93;) characterized by a special bony or cartilaginous shell developed from their ribs and acting as a shield.&#91;4&#93; 'Turtle' may refer to the order as a whole (American English) or to fresh-water and sea-dwelling testudines (British English).&#91;5&#93; The order Testudines includes both extant (living) and extinct species. The earliest known members of this group date from the Middle Jurassic,&#91;1&#93; making turtles one of the oldest reptile groups and a more ancient group than snakes or crocodilians. Of the 356 known species&#91;2&#93; alive today, some are highly endangered.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Turtle",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/220px-Florida_Box_Turtle_Digon3_re-edited.jpg"
        },
        {
        name: "Vicuña",
        desc: "The vicuña (Vicugna vicugna) or vicuna&#91;2&#93; (both /v?'ku?nj?/, very rarely spelled vicugna, which is actually the name of its genus)&#91;3&#93;&#91;4&#93; is one of the two wild South American camelids which live in the high alpine areas of the Andes, the other being the guanaco. It is a relative of the llama, and is now believed to be the wild ancestor of domesticated alpacas, which are raised for their coats. Vicuñas produce small amounts of extremely fine wool, which is very expensive because the animal can only be shorn every three years, and has to be caught from the wild. When knitted together, the product of the vicuña's wool is very soft and warm. The Inca valued vicuñas highly for their wool, and it was against the law for anyone but royalty to wear vicuña garments; today the vicuña is the national animal of Peru and appears in the Peruvian coat of arms.",
        url: "https://en.wikipedia.org/wiki/Vicu%C3%B1a",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg/220px-Vicugna_vicugna_at_about_4%2C000m%2C_near_the_Chajnantor_Plateau%2C_NW_Chile._Simon_Green_17th_April_2018.jpg"
        },
        {
        name: "Vinegaroon",
        desc: "Thelyphonida is an arachnid order comprising invertebrates commonly known as whip scorpions or vinegaroons (also spelled vinegarroons and vinegarones). They are often called uropygids in the scientific community based on an alternative name for the order, Uropygi (which may then also include the order Schizomida). The name 'whip scorpion' refers to their resemblance to true scorpions and possession of a whiplike tail. 'Vinegaroon' is based on their ability when attacked to discharge an offensive liquid which contains acetic acid, producing a vinegar-like smell.",
        url: "https://en.wikipedia.org/wiki/Thelyphonida",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Whipscorpion.jpg/220px-Whipscorpion.jpg"
        },
        {
        name: "Viper",
        desc: "The Viperidae (vipers) are a family of venomous snakes found in most parts of the world, with the exception of Antarctica, Australia, Hawaii, Madagascar, New Zealand, various other isolated islands, and north of the Arctic Circle. All have relatively long, hinged fangs that permit deep penetration and injection of snake venom. Four subfamilies are currently recognized.&#91;2&#93; They are also known as viperids. The name 'viper' is derived from the Latin word vipera, -ae, also meaning viper, possibly from vivus  ('living') and parere ('to beget'), referring to the trait viviparity (giving live birth) common in vipers but not in snakes at large.&#91;3&#93;",
        url: "https://en.wikipedia.org/wiki/Viper",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/45/Benny_Trapp_Montivipera_xanthina.jpg/220px-Benny_Trapp_Montivipera_xanthina.jpg"
        },
        {
        name: "Vulture",
        desc: "A vulture is a scavenging bird of prey. The two types of vultures are the New World vultures, including the Californian and Andean condors, and the Old World vultures, including the birds that are seen scavenging on carcasses of dead animals on African plains. Some traditional Old World vultures (including the bearded vulture) are not closely related to the others, which is why the vultures are to be subdivided into three taxa rather than two. New World vultures are found in North and South America; Old World vultures are found in Europe, Africa, and Asia, meaning that between the two groups, vultures are found on every continent except Australia and Antarctica (though Trigonoceps vultures have crossed the Wallace line).&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Vulture",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Old_%26_New_World_vultures.jpg/220px-Old_%26_New_World_vultures.jpg"
        },
        {
        name: "Wallaby",
        desc: "A wallaby is a small- or mid-sized macropod native to Australia and New Guinea, with introduced populations in New Zealand&#91;1&#93;, UK and other countries.  They belong to the same taxonomic family as kangaroos and sometimes the same genus, but kangaroos are specifically categorised into the six largest species of the family. The term wallaby is an informal designation generally used for any macropod that is smaller than a kangaroo or wallaroo that has not been designated otherwise.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Wallaby",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Red_necked_wallaby444.jpg/220px-Red_necked_wallaby444.jpg"
        },
        {
        name: "Walrus",
        desc: "The walrus (Odobenus rosmarus) is a large flippered marine mammal with a discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere. The walrus is the only living species in the family Odobenidae and genus Odobenus. This species is subdivided into two subspecies:&#91;2&#93; the Atlantic walrus (O. r. rosmarus) which lives in the Atlantic Ocean and the Pacific walrus (O. r. divergens) which lives in the Pacific Ocean.",
        url: "https://en.wikipedia.org/wiki/Walrus",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pacific_Walrus_-_Bull_%288247646168%29.jpg/220px-Pacific_Walrus_-_Bull_%288247646168%29.jpg"
        },
        {
        name: "Wasp",
        desc: "A wasp is any insect of the order Hymenoptera and suborder Apocrita that is neither a bee nor an ant. The Apocrita have a common evolutionary ancestor and form a clade; wasps as a group do not form a clade, but are paraphyletic with respect to bees and ants.",
        url: "https://en.wikipedia.org/wiki/Wasp",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Vespula_germanica_Richard_Bartz.jpg/220px-Vespula_germanica_Richard_Bartz.jpg"
        },
        {
        name: "Water buffalo",
        desc: "The water buffalo (Bubalus bubalis) or domestic water buffalo is a large bovid originating in the Indian subcontinent, Southeast Asia, and China. Today, it is also found in Europe, Australia, North America, South America and some African countries.&#91;1&#93; The wild water buffalo (Bubalus arnee) native to Southeast Asia is considered a different species, but most likely represents the ancestor of the domestic water buffalo.&#91;2&#93;",
        url: "https://en.wikipedia.org/wiki/Water_buffalo",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/7/72/2004buffalo.PNG/220px-2004buffalo.PNG"
        },
        {
        name: "Waxwing",
        desc: "The waxwings are passerine birds classified in the genus Bombycilla. They are brown and pale grey with silky plumage, a black and white eyestripe, a crest, a square-cut tail and pointed wings. Some of the wing feathers have red tips, the resemblance of which to sealing wax gives these birds their common name.  According to most authorities, this is the only genus placed in the family Bombycillidae, although Phainoptila is sometimes included. There are three species, the Bohemian waxwing (B. garrulus), the Japanese waxwing (B. japonica) and the cedar waxwing (B. cedrorum).",
        url: "https://en.wikipedia.org/wiki/Waxwing",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Bohemian_Wax_Wing.jpg/220px-Bohemian_Wax_Wing.jpg"
        },
        {
        name: "Weasel",
        desc: "A weasel /'wi?z?l/ is a mammal of the genus Mustela of the family Mustelidae. The genus Mustela includes the least weasels, polecats, stoats, ferrets, and European mink. Members of this genus are small, active predators, with long and slender bodies and short legs. The family Mustelidae (which also includes badgers, otters, and wolverines) is often referred to as the 'weasel family'. In the UK, the term 'weasel' usually refers to the smallest species, the least weasel (M.&#160;nivalis).&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Weasel",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustela_nivalis_-British_Wildlife_Centre-4.jpg/220px-Mustela_nivalis_-British_Wildlife_Centre-4.jpg"
        },
        {
        name: "Whale",
        desc: "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. They are an informal grouping within the infraorder Cetacea, usually excluding dolphins and porpoises. Whales, dolphins and porpoises belong to the order Cetartiodactyla, which consists of even-toed ungulates. Their closest living relatives are the hippopotamuses, having diverged about 40 million years ago. The two parvorders of whales, baleen whales (Mysticeti) and toothed whales (Odontoceti), are thought to have split apart around 34 million years ago.  Whales consist of eight extant families: Balaenopteridae (the rorquals), Balaenidae (right whales), Cetotheriidae (the pygmy right whale), Eschrichtiidae (the grey whale), Monodontidae (belugas and narwhals), Physeteridae (the sperm whale), Kogiidae (the dwarf and pygmy sperm whale), and Ziphiidae (the beaked whales).",
        url: "https://en.wikipedia.org/wiki/Whale",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Southern_right_whale.jpg/220px-Southern_right_whale.jpg"
        },
        {
        name: "Wobbegong",
        desc: "Wobbegong is the common name given to the 12 species of carpet sharks in the family Orectolobidae.  They are found in shallow temperate and tropical waters of the western Pacific Ocean and eastern Indian Ocean, chiefly around Australia and Indonesia, although one species (the Japanese wobbegong, Orectolobus japonicus) occurs as far north as Japan. The word wobbegong is believed to come from an Australian Aboriginal language, meaning 'shaggy beard', referring to the growths around the mouth of the shark of the western Pacific.",
        url: "https://en.wikipedia.org/wiki/Wobbegong",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/10/Spotted_wobbegong.jpg/220px-Spotted_wobbegong.jpg"
        },
        {
        name: "Wolf",
        desc: "The wolf (Canis lupus), also known as the gray/grey wolf, timber wolf, or tundra wolf, is a canine native to the wilderness and remote areas of Eurasia and North America. It is the largest extant member of its family, with males averaging 43-45&#160;kg (95-99&#160;lb) and females 36-38.5&#160;kg (79-85&#160;lb). It is distinguished from other Canis species by its larger size and less pointed features, particularly on the ears and muzzle. Its winter fur is long and bushy and predominantly a mottled gray in color, although nearly pure white, red and brown to black also occur.  Mammal Species of the World (3rd ed., 2005), a standard reference work in zoology, recognises 38 subspecies of C. lupus.",
        url: "https://en.wikipedia.org/wiki/Wolf",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Scandinavian_grey_wolf_Canis_lupus_%28cropped%29.jpg/220px-Scandinavian_grey_wolf_Canis_lupus_%28cropped%29.jpg"
        },
        {
        name: "Wolverine",
        desc: "The wolverine (/'w?lv?ri?n/) (also spelled wolverene), Gulo gulo (Gulo is Latin for 'glutton'), also referred to as the glutton, carcajou, skunk bear, or quickhatch, is the largest land-dwelling species of the family Mustelidae. It is a stocky and muscular carnivore, more closely resembling a small bear than other mustelids. A solitary animal,&#91;2&#93; it has a reputation for ferocity and strength out of proportion to its size, with the documented ability to kill prey many times larger than itself.",
        url: "https://en.wikipedia.org/wiki/Wolverine",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Wolverine_01.jpg/220px-Wolverine_01.jpg"
        },
        {
        name: "Wombat",
        desc: "Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about 1&#160;m (40&#160;in) in length with small, stubby tails. There are three extant species and they are all members of the family Vombatidae. They are adaptable and habitat tolerant, and are found in forested, mountainous, and heathland areas of south-eastern Australia, including Tasmania, as well as an isolated patch of about 300&#160;ha (740 acres) in Epping Forest National Park&#91;2&#93; in central Queensland.",
        url: "https://en.wikipedia.org/wiki/Wombat",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/220px-Vombatus_ursinus_-Maria_Island_National_Park.jpg"
        },
        {
        name: "Woodpecker",
        desc: "Woodpeckers are part of the family Picidae, a group of near-passerine birds that also consist of piculets, wrynecks, and sapsuckers. Members of this family are found worldwide, except for Australia, New Guinea, New Zealand, Madagascar, and the extreme polar regions. Most species live in forests or woodland habitats, although a few species are known that live in treeless areas, such as rocky hillsides and deserts, and the Gila woodpecker specialises in exploiting cacti.",
        url: "https://en.wikipedia.org/wiki/Woodpecker",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Woodpecker_20040529_151837_1c_cropped.JPG/220px-Woodpecker_20040529_151837_1c_cropped.JPG"
        },
        {
        name: "Worm",
        desc: "Worms /w??rm/ are many different distantly related animals that typically have a long cylindrical tube-like body and no limbs. Worms vary in size from microscopic to over 1 metre (3.3&#160;ft) in length for marine polychaete worms (bristle worms),&#91;1&#93; 6.7 metres (22&#160;ft) for the African giant earthworm, Microchaetus rappi,&#91;2&#93; and 58 metres (190&#160;ft) for the marine nemertean worm (bootlace worm), Lineus longissimus.&#91;3&#93;  Various types of worm occupy a small variety of parasitic niches, living inside the bodies of other animals. Free-living worm species do not live on land, but instead, live in marine or freshwater environments, or underground by burrowing. In biology, 'worm' refers to an obsolete taxon, vermes, used by Carolus Linnaeus and Jean-Baptiste Lamarck for all non-arthropod invertebrate animals, now seen to be paraphyletic. The name stems from the Old English word wyrm. Most animals called 'worms' are invertebrates, but the term is also used for the amphibian caecilians and the slowworm Anguis, a legless burrowing lizard. Invertebrate animals commonly called 'worms' include annelids (earthworms and marine polychaete or bristle worms), nematodes (roundworms), platyhelminthes (flatworms), marine nemertean worms ('bootlace worms'), marine Chaetognatha (arrow worms), priapulid worms, and insect larvae such as grubs and maggots.",
        url: "https://en.wikipedia.org/wiki/Worm",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Regenwurm1.jpg/300px-Regenwurm1.jpg"
        },
        {
        name: "Wren",
        desc: "The wren is a family of mostly small, brown, passerine birds in the (mainly) New World family Troglodytidae. The family includes 88 species divided into 19 genera. Only the Eurasian wren occurs in the Old World, where in Anglophone regions, it is commonly known simply as the 'wren', as it is the originator of the name. The name wren has been applied to other, unrelated birds, particularly the New Zealand wrens (Acanthisittidae) and the Australian wrens (Maluridae).",
        url: "https://en.wikipedia.org/wiki/Wren",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cistothorus_palustris_Iona.jpg/220px-Cistothorus_palustris_Iona.jpg"
        },
        {
        name: "Yak",
        desc: "The domestic yak (Bos grunniens) is a long-haired domesticated bovid found throughout the Himalayan region of the Indian subcontinent, the Tibetan Plateau and as far north as Mongolia and Siberia. It is descended from the wild yak (Bos mutus).&#91;1&#93;",
        url: "https://en.wikipedia.org/wiki/Yak",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/220px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg"
        },
        {
        name: "Zebra",
        desc: "Zebras (/'zi?br?/ ZEE-br?, /'z?br?/ ZEB-r?)&#91;1&#93; are several species of African equids (horse family) united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual. They are generally social animals that live in small harems to large herds. Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated.",
        url: "https://en.wikipedia.org/wiki/Zebra",
        imgUrl: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/220px-Plains_Zebra_Equus_quagga.jpg"
        },
        
];
  animalIndex = Math.floor(Math.random() * (this.animals.length - 1 - 0 + 1) + 0);
  typeIndex1 = Math.floor(Math.random() * (this.types.length - 1 - 0 + 1) + 0);
  typeIndex2 = Math.floor(Math.random() * (this.types.length - 1 - 0 + 1) + 0);
  animal = this.animals[this.animalIndex];
  type1 = this.types[this.typeIndex1];
  type2 = this.types[this.typeIndex2];

  constructor() { }

  ngOnInit() {
    console.log(this.animal)
  }

}
