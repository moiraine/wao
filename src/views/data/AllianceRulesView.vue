<script setup lang="ts">
  import { onMounted, ref } from 'vue'

</script>

<template>

    <div class="heading">General Rules</div>

    <ol class="rules-list">
        <li>
            Be kind to each other. This is a war game, but let’s keep it as a game and don’t be hateful.
        </li>
        <li>
            No politics. These discussions have no place in an international alliance and will benefit nobody.
        </li>
        <li>
            Be active for alliance events! If you can’t contribute and others are eager to join the alliance, 
            expect to be replaced
        </li>
        <li>
            All castles must be tagged with your name and alliance. If you are protecting friends, they should
            use your name.  We must be able to verify the identity of any castle in case of disputes.
        </li>
        <li>
            Everyone should have access to rss. Either a farmer or personal farms. No freeloading. 
            The alliance can supply nearly infinite rss, but not if you aren’t contributing to the alliance 
        </li>
        <li>
            Do not add "+" to mails as acknowledgement.  Everyone is required to be active and read all alliance mail.
            Ignorance or failure to read mail is not an excuse.  If you see mail that tells you to add a "+" when
            you are finished reading the rules, ignore the instruction entirely.
        </li>
    </ol>

    <div class="heading">War Rules</div>

    <ol class="rules-list">
        <li>
            No showing troops, anywhere. This includes everything on the map that an enemy can see. 
            If you have too many to hide, you must shield
        </li>
        <li>
            If you are hiding in another castle, you must keep track of cross-realm events.  For all 
            cross-realm events, you must recall your troops and shield. 
        </li>
        <li>
            Only troops t4 or less are allowed to be exposed at any time.
        </li>
        <li>
            No gathering more than 4 to an elite mine.
        </li>
        <li>
            When you log on, read the chat first. If we are in defense mode. That means no alliance activity. 
            No ruins, no swarms, no monsters, no lines.
        </li>
        <li>
            Do not reinforce before swords!
        </li>
        <li>
            If you are SOSing someone, and the target has been shared in chat, communicate! 
            Do not risk two players attacking at the same time 
        </li>
        <li>
            Farms must be cleaned regularly. Any farm holding more than 5m rss will become charity 
        </li>
        <li>
            Never leave a hole in the hive. Teleport only if you can fill the spot behind you. 
            Anyone who wants to teleport should make a filler ready to go before they teleport.   
        </li>
    </ol>

    <div class="heading">Void/Frenzy Rules</div>

    <ol class="rules-list">
        <li>
            Purge is 24 hours before the event. All points found will be zeroed.  For void, all resources become charity.
        </li>
        <li>
            If you let your shield drop during the event and give up points more than once, 
            prepare to be expelled and zeroed. It’s not hard to use 8 hours + 1 day shield. 
            If there is any doubt, then use a 3 day shield.
        </li>
        <li>
            Always use your royal challenge if the shield is down. Always shield before your army returns home. 
            The enemy should never find points if they attack your castle. If you can’t do this, don’t play.
        </li>
    </ol>


    <div class="heading">Team Events</div>

    <ol class="rules-list">
        <li>
            Listen to the commander only.  Do not talk.  Do not share coordinates.  
            Do not follow other people unless instructed.
        </li>
        <li>
            Everyone is responsible for themselves. Don’t blindly follow another person.  
            If they are wrong, you are wrong. 
        </li>
        <li>
            All formations must include a 4x4 setup. This means at least 500 of the evens and odds of each type of troop.
        </li>
        <li>
            Nobody is required to spend money to speed if they are unable to do so. 
            When a commander calls for speed, use your best judgment. If you join a speed attack, 
            you must speed to join within 5 seconds of swords. Otherwise it’s just a waste.
        </li>
        <li>
            Elite war should be the primary war to save your items for.  Don’t waste speeds in elite adventure. 
            Don’t waste gems on pointless things in the game. Everyone should be able to perform at least 2 
            full speed attacks a week in elite war. 
        </li>
    </ol>

    <div class="heading">Fortress Wars</div>

    <ol class="rules-list">
        <li>
            Always keep a second march formation to use for fortress wars in order to keep the main army safe!
        </li>
        <li>
            Do not defend tiles unless instructed to do so.
        </li>
        <li>
            Never abandon a tile! If you are the last person inside, you must alert the chat that you need a filler, 
            and wait for the filler to arrive.  We can lose an entire war if one person abandons a 
            tile at the perfectly wrong time.
        </li>
    </ol>
    
</template>

<style>
    .heading {
        padding: 1rem;
        font-weight: bold;
        font-size: 1.5rem;
    }
    .table {
        min-width: 32rem;
    }

    .accordion {
        min-width: 36rem;
    }

    .rules-list {
        font-size: 1.5rem;
    }
</style>
