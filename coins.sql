CREATE TABLE `bannedip` (
  `id` bigint(32) NOT NULL,
  `ip` text CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `bet_tickets` (
  `id` int(11) NOT NULL,
  `amount` int(32) NOT NULL,
  `odds` decimal(8,2) NOT NULL,
  `user` varchar(26) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `bonusbattles_games` (
  `id` int(11) NOT NULL,
  `time_start` bigint(20) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  `status` int(11) NOT NULL,
  `players` text NOT NULL,
  `max_players` int(11) NOT NULL DEFAULT '0',
  `game` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `bonus_codes` (
  `id` int(11) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `code` varchar(256) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `uses` bigint(32) NOT NULL DEFAULT '0',
  `max_uses` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

CREATE TABLE `bonus_uses` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `code` varchar(256) CHARACTER SET utf8 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

CREATE TABLE `coinflip_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `gameid` bigint(32) NOT NULL,
  `coin` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `coinflip_games` (
  `id` bigint(32) NOT NULL,
  `canceled` bigint(32) NOT NULL DEFAULT '0',
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `creator` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `percentage` double NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `crash_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `auto_cashout` decimal(32,2) NOT NULL,
  `cashedout` bigint(32) NOT NULL DEFAULT '0',
  `point_cashedout` decimal(32,2) NOT NULL DEFAULT '0.00',
  `game_id` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `crash_rolls` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `point` decimal(32,2) NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `crypto_addresses` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `address` varchar(256) CHARACTER SET utf16 NOT NULL,
  `currency` varchar(32) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `crypto_transactions` (
  `id` bigint(32) NOT NULL,
  `inspected` bigint(32) NOT NULL DEFAULT '0',
  `status` bigint(32) DEFAULT NULL,
  `type` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL DEFAULT '0',
  `name` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `avatar` text CHARACTER SET utf16,
  `xp` bigint(32) DEFAULT '0',
  `txnid` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `address` text CHARACTER SET utf16,
  `currency` varchar(32) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL DEFAULT '0.00',
  `value` double NOT NULL DEFAULT '0',
  `exchange` decimal(32,5) NOT NULL DEFAULT '0.00000',
  `fee` double NOT NULL DEFAULT '0',
  `time` bigint(32) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `dice_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `number` decimal(32,2) NOT NULL,
  `win` decimal(32,2) NOT NULL DEFAULT '0.00',
  `chance` decimal(32,2) NOT NULL,
  `multiplier` decimal(32,2) NOT NULL,
  `type` varchar(32) CHARACTER SET utf16 NOT NULL,
  `roll` decimal(32,2) NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `info` (
  `play` bigint(32) NOT NULL DEFAULT '1',
  `trade` bigint(32) NOT NULL DEFAULT '1',
  `maintenance` bigint(32) NOT NULL DEFAULT '0',
  `maintenance_message` varchar(256) CHARACTER SET utf16 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `jackpot_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 DEFAULT '',
  `name` varchar(256) CHARACTER SET utf16 NOT NULL DEFAULT '',
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL DEFAULT '0',
  `amount` decimal(32,2) NOT NULL DEFAULT '0.00',
  `ticket_min` bigint(32) NOT NULL DEFAULT '0',
  `ticket_max` bigint(32) NOT NULL DEFAULT '0',
  `gameid` bigint(32) NOT NULL DEFAULT '0',
  `time` bigint(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `jackpot_history` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `betid` bigint(32) DEFAULT NULL,
  `chance` decimal(32,2) DEFAULT '0.00',
  `ticket` bigint(32) NOT NULL DEFAULT '0',
  `tickets` bigint(32) NOT NULL DEFAULT '0',
  `amount` decimal(32,2) NOT NULL DEFAULT '0.00',
  `hash` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `secret` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `percentage` double NOT NULL DEFAULT '0',
  `time` bigint(32) DEFAULT NULL,
  `players` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `link_keys` (
  `id` bigint(32) NOT NULL,
  `used` bigint(32) NOT NULL DEFAULT '0',
  `removed` bigint(32) NOT NULL DEFAULT '0',
  `type` varchar(265) CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `key` varchar(256) CHARACTER SET utf16 NOT NULL,
  `expire` bigint(32) NOT NULL,
  `created` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `matchid` bigint(32) DEFAULT NULL,
  `time` bigint(32) DEFAULT NULL,
  `game` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `status` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `bet1` float DEFAULT NULL,
  `bet2` float DEFAULT NULL,
  `opponent1_name` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `opponent1_logo` text CHARACTER SET utf16,
  `opponent1_score` int(11) DEFAULT NULL,
  `opponent1_bet` decimal(32,2) DEFAULT NULL,
  `opponent1_probably_win` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `opponent2_name` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `opponent2_logo` text CHARACTER SET utf16,
  `opponent2_score` int(11) DEFAULT NULL,
  `opponent2_bet` decimal(32,2) DEFAULT NULL,
  `opponent2_probably_win` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `stream_link` text CHARACTER SET utf16,
  `name_tournament` varchar(256) CHARACTER SET utf16 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `matches_bets` (
  `id` int(11) NOT NULL,
  `matchid` int(32) NOT NULL,
  `user` varchar(17) CHARACTER SET utf16 NOT NULL,
  `amount` int(32) NOT NULL,
  `opponent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `match_ticket` (
  `id` int(11) NOT NULL,
  `matchid` int(32) NOT NULL,
  `ticketid` int(32) NOT NULL,
  `opponent` int(11) NOT NULL,
  `is_passed` tinyint(1) NOT NULL DEFAULT '0',
  `is_finished` tinyint(1) NOT NULL DEFAULT '0',
  `is_draw` tinyint(1) NOT NULL DEFAULT '0',
  `multiplier` decimal(8,2) NOT NULL,
  `bet_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `messages` (
  `id` bigint(32) NOT NULL,
  `deleted` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `rank` bigint(32) NOT NULL,
  `xp` bigint(32) NOT NULL,
  `message` varchar(200) CHARACTER SET utf16 NOT NULL,
  `channel` varchar(32) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `minesweeper_bets` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `cashout` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `amount_bombs` bigint(32) NOT NULL,
  `win` decimal(32,2) NOT NULL DEFAULT '0.00',
  `route` text CHARACTER SET utf16,
  `bombs` text CHARACTER SET utf16 NOT NULL,
  `value` varchar(255) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(255) CHARACTER SET utf16 NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `p2p_buyers` (
  `id` bigint(32) NOT NULL,
  `canceled` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `steamid` varchar(17) CHARACTER SET utf16 NOT NULL,
  `apikey` varchar(32) CHARACTER SET utf16 NOT NULL,
  `tradelink` text CHARACTER SET utf16 NOT NULL,
  `offerid` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `p2p_transactions` (
  `id` bigint(32) NOT NULL,
  `status` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `steamid` varchar(17) CHARACTER SET utf16 NOT NULL,
  `apikey` varchar(32) CHARACTER SET utf16 NOT NULL,
  `tradelink` text CHARACTER SET utf16 NOT NULL,
  `items` text CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `game` varchar(256) CHARACTER SET utf16 NOT NULL,
  `tradeofferid` varchar(32) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `plinko_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `color` varchar(256) CHARACTER SET utf16 NOT NULL,
  `pick` decimal(32,2) NOT NULL,
  `value` varchar(256) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `rain_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `level` bigint(32) NOT NULL,
  `winning` decimal(32,2) NOT NULL DEFAULT '0.00',
  `tickets` varchar(256) CHARACTER SET utf16 NOT NULL,
  `id_rain` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `rain_history` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `amount` decimal(32,2) NOT NULL,
  `time_roll` bigint(32) NOT NULL,
  `time_create` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `rain_tips` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `id_rain` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `referral_codes` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `code` varchar(256) CHARACTER SET utf16 NOT NULL,
  `collected` decimal(32,2) NOT NULL DEFAULT '0.00',
  `available` decimal(32,5) NOT NULL DEFAULT '0.00000'
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `referral_deposited` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `referral` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `commission` decimal(32,5) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `referral_updates` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `code` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `referral_uses` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `referral` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `referral_wagered` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `referral` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `commission` decimal(32,5) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `roulette_bets` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `color` varchar(256) CHARACTER SET utf16 NOT NULL,
  `game_id` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `roulette_rolls` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `roll` bigint(32) NOT NULL,
  `color` varchar(256) CHARACTER SET utf16 NOT NULL,
  `progress` decimal(32,2) NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `slots_bets` (
  `id` int(11) NOT NULL,
  `userid` varchar(24) DEFAULT NULL,
  `name` varchar(256) DEFAULT NULL,
  `avatar` text,
  `xp` bigint(32) NOT NULL,
  `game` text NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `steam_history` (
  `id` bigint(32) NOT NULL,
  `itemid` varchar(256) CHARACTER SET utf16 NOT NULL,
  `lastid` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `steam_inventory` (
  `id` bigint(32) NOT NULL,
  `itemid` varchar(256) CHARACTER SET utf16 NOT NULL,
  `game` text CHARACTER SET utf16 NOT NULL,
  `status` bigint(32) NOT NULL DEFAULT '0',
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `steam_items` (
  `id` bigint(32) NOT NULL,
  `itemid` varchar(256) CHARACTER SET utf16 NOT NULL,
  `wear` decimal(32,16) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `steam_transactions` (
  `id` bigint(32) NOT NULL,
  `status` bigint(32) NOT NULL DEFAULT '0',
  `type` varchar(256) CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `steamid` varchar(17) CHARACTER SET utf16 NOT NULL,
  `items` text CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `code` varchar(256) CHARACTER SET utf16 NOT NULL,
  `game` varchar(256) CHARACTER SET utf16 NOT NULL,
  `tradeofferid` bigint(32) NOT NULL,
  `botsteamid` varchar(17) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `steam_verifications` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `botsteamid` varchar(17) CHARACTER SET utf16 NOT NULL,
  `tradeofferid` bigint(32) NOT NULL,
  `item` text CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `support_messages` (
  `id` bigint(32) NOT NULL,
  `support_id` bigint(32) NOT NULL,
  `message` text CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `response` int(32) NOT NULL DEFAULT '0',
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `support_tickets` (
  `id` bigint(32) NOT NULL,
  `closed` bigint(32) NOT NULL DEFAULT '0',
  `to_userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `to_name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `from_userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `from_name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `title` varchar(256) CHARACTER SET utf16 NOT NULL,
  `departament` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `tower_bets` (
  `id` bigint(32) NOT NULL,
  `ended` bigint(32) NOT NULL DEFAULT '0',
  `cashout` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `win` decimal(32,2) NOT NULL DEFAULT '0.00',
  `route` varchar(255) CHARACTER SET utf16 DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf16 NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `user` varchar(17) CHARACTER SET utf16 NOT NULL,
  `service` varchar(32) CHARACTER SET utf16 NOT NULL,
  `title` varchar(32) CHARACTER SET utf16 NOT NULL,
  `amount` int(11) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `unbox_opens` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `name` varchar(256) CHARACTER SET utf16 NOT NULL,
  `avatar` text CHARACTER SET utf16 NOT NULL,
  `xp` bigint(32) NOT NULL,
  `case_id` varchar(32) CHARACTER SET utf16 NOT NULL,
  `winning_id` bigint(32) NOT NULL,
  `percentage` double NOT NULL,
  `secret` varchar(256) CHARACTER SET utf16 NOT NULL,
  `hash` varchar(256) CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` bigint(32) NOT NULL,
  `initialized` bigint(32) NOT NULL DEFAULT '0',
  `verified` bigint(32) NOT NULL DEFAULT '0',
  `anonymous` bigint(32) NOT NULL DEFAULT '0',
  `private` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 DEFAULT NULL,
  `username` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `email` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `password` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `name` varchar(256) CHARACTER SET utf16 DEFAULT NULL,
  `avatar` text CHARACTER SET utf16,
  `rank` bigint(32) NOT NULL DEFAULT '0',
  `balance` decimal(32,5) NOT NULL DEFAULT '0.00000',
  `balance_battles` int(11) NOT NULL DEFAULT '0',
  `xp` bigint(32) NOT NULL DEFAULT '0',
  `available` decimal(32,2) NOT NULL DEFAULT '0.00',
  `tradelink` text CHARACTER SET utf16,
  `steamid` text,
  `apikey` varchar(32) CHARACTER SET utf16 DEFAULT NULL,
  `exclusion` bigint(32) NOT NULL DEFAULT '0',
  `rakeback` float DEFAULT NULL,
  `deposit_count` int(11) NOT NULL DEFAULT '0',
  `deposit_total` decimal(32,2) NOT NULL DEFAULT '0.00',
  `withdraw_count` int(11) NOT NULL DEFAULT '0',
  `withdraw_total` decimal(32,2) NOT NULL DEFAULT '0.00',
  `time_create` bigint(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_binds` (
  `id` bigint(32) NOT NULL,
  `removed` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `bind` varchar(256) CHARACTER SET utf16 NOT NULL,
  `bindid` text CHARACTER SET utf16 NOT NULL,
  `created` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_changes` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `change` varchar(256) CHARACTER SET utf16 NOT NULL,
  `value` text CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_logins` (
  `id` bigint(32) NOT NULL,
  `type` text CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `ip` text CHARACTER SET utf16 NOT NULL,
  `device` text CHARACTER SET utf16 NOT NULL,
  `location` text CHARACTER SET utf16 NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_restrictions` (
  `id` bigint(32) NOT NULL,
  `removed` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `restriction` varchar(256) CHARACTER SET utf16 NOT NULL,
  `reason` varchar(256) CHARACTER SET utf16 NOT NULL,
  `byuserid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `expire` bigint(32) NOT NULL DEFAULT '-1',
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_rewards` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `reward` varchar(256) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `users_sessions` (
  `id` int(11) NOT NULL,
  `removed` bigint(32) NOT NULL DEFAULT '0',
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `session` varchar(32) CHARACTER SET utf16 NOT NULL,
  `expire` bigint(32) NOT NULL,
  `created` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE `users_trades` (
  `id` bigint(32) NOT NULL,
  `type` varchar(32) CHARACTER SET utf16 NOT NULL,
  `method` varchar(256) CHARACTER SET utf16 NOT NULL,
  `game` varchar(32) CHARACTER SET utf16 NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `value` double NOT NULL,
  `tradeid` bigint(32) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users_transactions` (
  `id` bigint(32) NOT NULL,
  `userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `service` varchar(32) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `users_transfers` (
  `id` bigint(32) NOT NULL,
  `from_userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `to_userid` varchar(24) CHARACTER SET utf16 NOT NULL,
  `amount` decimal(32,2) NOT NULL,
  `time` bigint(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

